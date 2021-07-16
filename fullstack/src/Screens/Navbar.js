import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"

export default function Navbars(props){
    return(<div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand style = {{fontFamily:'cursive',fontWeight:'bolder'}} href="#home">Allgoscale</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link style = {{fontFamily:'cursive',fontWeight:'bolder'}} href='/home'>Contact-us</Nav.Link>
      <Nav.Link style = {{fontFamily:'cursive',fontWeight:'bolder'}} href="/analytics">Analytics</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
 <h1 style = {{fontFamily:'cursive',fontWeight:'bolder',marginTop:'200px',textAlign:'center'}}>Welcome Sir !</h1>
    </div>)
}