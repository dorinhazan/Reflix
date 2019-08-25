import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Landing extends Component {
constructor(){
    super()
    this.state={
        userData:[
            {name: 'mona',background:'blue'},
            {name: 'rona',background:'red'},
            {name: 'sagi',background:'green'},
            {name: 'stav',background:'pink'}
        ]
    }
}
  render() {
    return(
<div className="user">
    <Link to="/catalog"><div className="names" id="mona">mona</div>
   <div className="names" id="rona">rona</div> 
   <div className="names" id="sagi">sagi</div> 
   <div  className="names" id="stav">stav</div> 
   </Link>
   </div> 
   )
  }
    
}
    
export default Landing;
