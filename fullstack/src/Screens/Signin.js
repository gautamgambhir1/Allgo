import React from 'react'
import {  FaGooglePlay } from 'react-icons/fa';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Signin(){
    return(<div>
        <div style = {{marginTop:'180px'}}>
            <div style = {{marginLeft:'600px',marginBottom:'80px'}}>
        <FaGooglePlay style = {{fontSize:'2.5rem',color:'red'}}/><br></br>
        <button style = {{backgroundColor:'blue',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}}><a style={{color:'white',fontWeight:'bolder',fontSize:'1.5rem'}} href = "http://127.0.0.1:8000/signin/google/login/">Sign in with Google</a></button>
        </div>
        <div style = {{marginLeft:'600px'}}>
        <GitHubIcon style = {{fontSize:'2.8rem'}}/><br></br>
        <button style = {{backgroundColor:'black',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}}><a style={{color:'white',fontWeight:'bolder',fontSize:'1.5rem'}} href = "http://127.0.0.1:8000/signin/github/login/">Sign in with Github </a></button>
        </div>
        </div>
    </div>)
}