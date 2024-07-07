import {Component} from "react";
class App extends Component{
  constructor(){
    super();
    this.state={
      "sub":"Angular9"
    }
  }
  render(){
    return (<div> <h1>Sub:<span style ={{color:'red'}}>{this.state.sub}</span></h1><br></br>
    <button onClick={this.myFun}>Change</button></div> )
  };
  myFun =()=>{this.setState({sub:"Angular10"});};
}
export default App;

