import React from 'react'

let inx = 1;
export default class CircleTest extends React.Component{
  constructor() {
    super();
    this.state = {
      count:1
    }
  }
  static getDerivedStateFromProps(nextProps, prevState){
    console.log("getDerivedStateFromProps")
    console.log(nextProps);
    console.log(prevState);
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);
    return null;
  }


  render() {
    console.log("render>>>>>>>>>>>>>>")
    return (
      <div>
        <h1>Circle Test</h1>
        <p>{'count: ' + this.state.count}</p>
        <button
          onClick={()=>{
            console.log(inx++);
            console.log(this.state.count);
            this.setState({
              count: this.state.count + 1,
            },()=>{
              console.log(this.state.count);
            })
          }}
        >
          add
        </button>
      </div>
    )
  }
}