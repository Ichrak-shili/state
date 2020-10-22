import React from 'react';
import Photo from "./imageInSrc.png";
import './App.css';
import $ from 'jquery';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    show:true,
    person:{fullName:"Ichrak-Shili",bio:"Just Smile",imgSrc:Photo ,profession:"Student"},
    date:new Date()
    
    }

  }
  handleClick=()=>{
    
    this.setState({show:!this.state.show});
    console.log(this.state.show);
    $('img').toggle();
    
  }
  componentDidMount()
  {
    this.timerID=setInterval(()=>{this.setState({date:new Date()});},1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  
  render(){
    return(
      <div style={{textAlign:"center",width:"30%" , height:"41%",border:"1px solid black",position:"relative",left:"35%"}}>
        <div><span>{this.state.person.fullName}</span></div>
        <div><span>{this.state.person.bio}</span></div>
        <div><span>{this.state.person.profession}</span></div>
        <img src={this.state.person.imgSrc} alt="it's me"/><br/>
        
        <button onClick={this.handleClick}>click me</button>  <br/>
        <div ><span style={{width:"20%",border:"1px solid red"}}>It's <strong>{this.state.date.toLocaleTimeString()}</strong></span></div>
      </div>
    );
  }


};


export default App;
