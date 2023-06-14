import React  from "react";
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
//class Counter extends React,Component{
//constructor(props){
// super(props)
//  this.state={count:0}
//}
// }
    increment() {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  
    decrement() {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }
  
    render() {
      return (
        <div>
          <h2>Counter</h2>
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.increment()}>Increment</button>
          <button onClick={() => this.decrement()}>Decrement</button>
        </div>
      );
    }
  }
  
  export default Counter;