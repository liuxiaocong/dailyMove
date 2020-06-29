import React from 'react'
import util from './util';
import config from './config';
export default class Test extends React.Component {
  constructor(prop) {
    console.log("constructor")
    super(prop);
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  // 更新周期
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("componentWillReceiveProps")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate")
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("componentWillUpdate")
  }

  //getSnapshotBeforeUpdate(prevProps, prevState) {
  //  console.log("getSnapshotBeforeUpdate")
  //}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate")
  }

  render(){
    console.log("render");
    console.log("aaa:" + util.a)
    console.log("config a:" + config.a)
    return (
      <div
        style={{
          border: "solid 1px #000"
        }}
      >
        <p>Test</p>
        <button type={'button'} onClick={()=>{
          this.setState({})
        }}>
          Set state
        </button>
      </div>
    )
  }
}