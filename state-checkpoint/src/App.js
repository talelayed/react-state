import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component{
  state = {
    Person : {fullName:"TALEL AYED",bio:"studying in GomyCode.", imgSrc:"talel.jpg", profession:"insatien"},
    shows : false,
    count: 0,
    profileDisplay : "none"
  };
  countInterval = () =>{
    setInterval(() => {
      this.state.count += 1
    }, 1000);
  }
  showProfile = () =>{
    if (this.state.shows){
      this.setState({shows:false})
    }
    else{
      this.setState({shows:true,profileDisplay:"block"})
      this.countInterval();
    }
  }
  render(){
    return(
      <>
      <div style={{marginTop:"-240px",display:`${this.state.profileDisplay}`}}>
      <img style={{border:"solid 5px white",borderRadius:"100%",width:"18%",margin:"auto"}} src={this.state.Person.imgSrc}></img>
      <h2 style={{marginBottom:"5px"}}>{this.state.Person.fullName}</h2>
      <h4 style={{marginTop:"0px",color:"gray"}}>{this.state.Person.profession}</h4>
      </div>
      <Button variant="secondary" onClick={this.showProfile}>Show & Time</Button>
      <h2 >TIME: {this.state.count}s</h2>
      </>
    )
  }

}
