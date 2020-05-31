function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  };
}

class Component {
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }

  setState(stateChange) {
    // 将修改合并到state
    Object.assign(this.state, stateChange);
    renderComponent(this);
  }
}

function createComponent(component, props) {

  let inst;
  // 如果是类定义组件，则直接返回实例
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
    // 如果是函数定义组件，则将其扩展为类定义组件
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function() {
      return this.constructor(props);
    };
  }

  return inst;
}

function setComponentProps(component, props) {

  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }

  component.props = props;

  renderComponent(component);

}

function renderComponent(component) {

  let base;

  const renderer = component.render();

  if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }
  console.log('component.base');
  console.log(component.base);
  console.log('renderer');
  console.log(JSON.stringify(renderer));
  //base = _render(renderer);
  base = diff(component.base, renderer);
  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else if (component.componentDidMount) {
    component.componentDidMount();
  }

  //if (component.base && component.base.parentNode) {
  //  component.base.parentNode.replaceChild(base, component.base);
  //}

  component.base = base;
  base._component = component;

}

function diff(dom, vnode, container) {

  const ret = diffNode(dom, vnode);

  if (container && ret.parentNode !== container) {
    container.appendChild(ret);
  }

  return ret;

}

function diffNode(dom, vnode) {
  console.log('diffnode');
  console.log(dom);
  console.log(vnode);
  let out = dom;

  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'number') vnode = String(vnode);

  // diff text node
  if (typeof vnode === 'string') {
  console.log('1111')
    // 如果当前的DOM就是文本节点，则直接更新内容
    if (dom && dom.nodeType === 3) {    // nodeType: https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
      if (dom.textContent !== vnode) {
        dom.textContent = vnode;
      }
      // 如果DOM不是文本节点，则新建一个文本节点DOM，并移除掉原来的
    } else {
      out = document.createTextNode(vnode);
      if (dom && dom.parentNode) {
        dom.parentNode.replaceChild(out, dom);
      }
    }

    return out;
  }

  if (typeof vnode.tag === 'function') {
    console.log('2222')
    return diffComponent(dom, vnode);
  }

  //
  if (!dom || !isSameNodeType(dom, vnode)) {
    console.log('3333')
    out = document.createElement(vnode.tag);

    if (dom) {
      [...dom.childNodes].map(out.appendChild);    // 将原来的子节点移到新节点下

      if (dom.parentNode) {
        dom.parentNode.replaceChild(out, dom);    // 移除掉原来的DOM对象
      }
    }
  }

  if (vnode.children && vnode.children.length > 0 || (out.childNodes && out.childNodes.length > 0)) {
    console.log('4444')
    diffChildren(out, vnode.children);
  }

  diffAttributes(out, vnode);

  return out;

}

function isSameNodeType(dom, vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return dom.nodeType === 3;
  }

  if (typeof vnode.tag === 'string') {
    return dom.nodeName.toLowerCase() === vnode.tag.toLowerCase();
  }

  return dom && dom._component && dom._component.constructor === vnode.tag;
}

function diffAttributes(dom, vnode) {

  const old = {};    // 当前DOM的属性
  const attrs = vnode.attrs;     // 虚拟DOM的属性

  for (let i = 0; i < dom.attributes.length; i++) {
    const attr = dom.attributes[i];
    old[attr.name] = attr.value;
  }

  // 如果原来的属性不在新的属性当中，则将其移除掉（属性值设为undefined）
  for (let name in old) {

    if (!(name in attrs)) {
      setAttribute(dom, name, undefined);
    }

  }

  // 更新新的属性值
  for (let name in attrs) {

    if (old[name] !== attrs[name]) {
      setAttribute(dom, name, attrs[name]);
    }
  }
}

function diffChildren(dom, vchildren) {

  const domChildren = dom.childNodes;
  const children = [];

  const keyed = {};

  if (domChildren.length > 0) {
    for (let i = 0; i < domChildren.length; i++) {
      const child = domChildren[i];
      const key = child.key;
      if (key) {
        keyedLen++;
        keyed[key] = child;
      } else {
        children.push(child);
      }
    }
  }

  if (vchildren && vchildren.length > 0) {

    let min = 0;
    let childrenLen = children.length;

    for (let i = 0; i < vchildren.length; i++) {

      const vchild = vchildren[i];
      const key = vchild.key;
      let child;

      if (key) {

        if (keyed[key]) {
          child = keyed[key];
          keyed[key] = undefined;
        }

      } else if (min < childrenLen) {

        for (let j = min; j < childrenLen; j++) {

          let c = children[j];

          if (c && isSameNodeType(c, vchild)) {

            child = c;
            children[j] = undefined;

            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;

          }

        }

      }

      child = diffNode(child, vchild);

      const f = domChildren[i];
      if (child && child !== dom && child !== f) {
        if (!f) {
          dom.appendChild(child);
        } else if (child === f.nextSibling) {
          removeNode(f);
        } else {
          dom.insertBefore(child, f);
        }
      }

    }
  }

}

function diffComponent(dom, vnode) {

  let c = dom && dom._component;
  let oldDom = dom;

  // 如果组件类型没有变化，则重新set props
  if (c && c.constructor === vnode.tag) {
    setComponentProps(c, vnode.attrs);
    dom = c.base;
    // 如果组件类型变化，则移除掉原来组件，并渲染新的组件
  } else {

    if (c) {
      unmountComponent(c);
      oldDom = null;
    }

    c = createComponent(vnode.tag, vnode.attrs);

    setComponentProps(c, vnode.attrs);
    dom = c.base;

    if (oldDom && dom !== oldDom) {
      oldDom._component = null;
      removeNode(oldDom);
    }

  }
  return dom;
}

const React = {
  createElement,
  createComponent,
  Component,
  render,
};

function render(vnode, container) {
  return container.appendChild(_render(vnode));
}

function _render(vnode) {

  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'number') vnode = String(vnode);

  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode);
    return textNode;
  }
  if (typeof vnode.tag === 'function') {

    const component = createComponent(vnode.tag, vnode.attrs);

    setComponentProps(component, vnode.attrs);

    return component.base;
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    });
  }

  vnode.children.forEach(child => render(child, dom));    // 递归渲染子节点
  return dom;
}

function setAttribute(dom, name, value) {
  // 如果属性名是className，则改回class
  if (name === 'className') name = 'class';

  // 如果属性名是onXXX，则是一个事件监听方法
  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || '';
    // 如果属性名是style，则更新style对象
  } else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      for (let name in value) {
        // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
        dom.style[name] = typeof value[name] === 'number' ? value[name] + 'px' : value[name];
      }
    }
    // 普通属性则直接更新属性
  } else {
    if (name in dom) {
      dom[name] = value || '';
    }
    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name);
    }
  }
}

export default React;