import { Component } from "react"

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { count: 0 }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {

    this.setState({ count: this.state.count + 1 })
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  


  render() {
    return (<>
      <h1>Counter App</h1>
      <div>
        count:{this.state.count}
      </div>
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    </>);
  }

}
export default App;