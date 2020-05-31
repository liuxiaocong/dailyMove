import React from './react';
// end with react frame work
class Count extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    setInterval(()=>{
      this.setState({
        count: this.state.count+1,
      })
    }, 1000)
  }
  render() {
    return <div>
      Text
      <div>Count: {this.state.count}</div>
      <button
        onClick={()=>{
          this.setState({
            count: this.state.count+1,
          })
        }}
      >
        Add
      </button>
    </div>;
  }
}

const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = '';
    return React.render(vnode, container);
  },
};
const element = <Count name="counter"/>;
console.log(element);
ReactDOM.render(
  element,
  document.getElementById('root'),
);


//setInterval( tick, 1000 );