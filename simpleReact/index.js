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

  base = _render(renderer);

  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else if (component.componentDidMount) {
    component.componentDidMount();
  }

  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  }

  component.base = base;
  base._component = component;

}

const React = {
  createElement,
  createComponent,
  Component,
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

// end with react frame work
class Welcome extends React.Component {
  render() {
    return <h1>Hello, { this.props.name }</h1>;
  }
}

const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = '';
    return render(vnode, container);
  },
};
const element = <Welcome name="Sara"/>;
ReactDOM.render(
  element,
  document.getElementById('root'),
);

function tick() {
  const element = (
    <div>
      <Welcome name="Sara"/>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById( 'root' )
  );
}

setInterval( tick, 1000 );