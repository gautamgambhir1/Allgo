import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import ReCaptchaV2 from 'react-google-recaptcha'
import { useDispatch } from 'react-redux'
import { Infoaction } from '../Actions/Detailaction'


export default function Home({history}){
  const [detail,setdetail] = useState({})
  const dispatch = useDispatch()

  const handlechange = (evt)=>{
    setdetail({...detail,[evt.target.name]:evt.target.value})
  }

  const handleclick = (evt)=>{
    evt.preventDefault()
    dispatch(Infoaction(detail,history))

  }

    return(<div>
        <Form style = {{marginLeft:"450px",width:"30%",boxShadow:'0 2px 2px rgba(0,0,0,0.8)',marginTop:'50px',padding:"20px 20px 20px 20px"}} onSubmit={handleclick}>
    <Form.Label style = {{fontWeight:'bolder',fontFamily:"cursive",marginLeft:"150px"}}>First name</Form.Label>
    <Form.Control onChange={handlechange} name = "first_name" style = {{textAlign:'center',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} type="text" placeholder="Enter First name" />
    <Form.Label style = {{fontWeight:'bolder',fontFamily:"cursive",marginLeft:"150px"}}>Last name</Form.Label>
    <Form.Control onChange={handlechange} name = "last_name" style = {{textAlign:'center',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} type="text" placeholder="Enter last name" />
  <Form.Group controlId="formBasicEmail">
    <Form.Label style = {{fontWeight:'bolder',fontFamily:"cursive",marginLeft:"150px"}}>Email address</Form.Label>
    <Form.Control onChange={handlechange} name = "email" style = {{textAlign:'center',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group>
    <Form.Label style = {{fontWeight:'bolder',fontFamily:"cursive",marginLeft:"150px"}}>Message</Form.Label>
    <Form.Control onChange={handlechange} name = "message" style = {{height:"125px",textAlign:'center',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} type="text" placeholder="Message" />
    <ReCaptchaV2 style = {{marginTop:"50px"}}
  sitekey="6Ld0Q5IbAAAAAELAqE8YwwEcbLHVzH0sqdTBS8PK"
/>
  <Button style = {{marginLeft:"170px",marginTop:"50px"}} variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
</Form>
    </div>)
}