
import React, { Component } from 'react'
import './Private.css'
export default class Header extends Component {
  render() {
    return (
      <div style={{backgroundColor:"white"}}>
<div style={{marginLeft:"8%" , marginTop:"3%"}}>
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li style={{marginRight:"0%"}} className="nav-item">
          <a className="navbar" aria-current="page" href="#">Home</a>
        </li>
        <li style={{marginRight:"0%"}} className="nav-item">
          <a className="navbar" href="#">Product</a>
        </li>
        <li style={{marginRight:"0%"}} className="nav-item">
          <a className="navbar" href="#">Categories</a>
        </li>
        <li style={{marginRight:"0%"}} className="nav-item">
          <a className="navbar" href="#">SALE</a>
        </li>
        <label style={{marginLeft:"50%" ,marginTop:"1.5%", marginTop:"2%" , color:"#4CAF4F"}}>FOURTUNERS</label>
      </ul>
    </div>

 
 {/* <button type="button" class=" button1 ">Rejistration Here</button> */}
 <button type="button" class="btn btn-outline-success button1">Success</button>
  </div>
</nav>
</div>
      </div>
      
    )
  }
}












{/* <div style={{justifyContent:"center" }} className="container">
<div className="row align-items-start" >
  <div className="col">
    <img style={{marginTop:"15px"}} src={require('../../src/image/Logo.png')}></img>

  </div>
  <div className="col">
  <img style={{marginTop:"15px"}} src={require('../../src/image/Logo2.png')}></img>
  </div>
  <div className="col">
  <img style={{marginTop:"15px"}} src={require('../../src/image/Logo3.png')}></img>
  </div>
  <div className="col">
  <img style={{marginTop:"15px"}} src={require('../../src/image/Logo4.png')}></img>
  </div>
  <div className="col">
  <img style={{marginTop:"15px"}} src={require('../../src/image/Logo5.png')}></img>
  </div>
  <div className="col">
  <img style={{marginTop:"15px"}} src={require('../../src/image/Logo6.png')}></img>
  </div>
  <div className="col">
  <img style={{marginTop:"15px"}} src={require('../../src/image/Logo1.png')}></img>
  </div>
</div> */}

// </div>