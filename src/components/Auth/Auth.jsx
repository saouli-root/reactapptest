import React , {useState} from 'react'

import {Form,Button,Container} from 'react-bootstrap'
import axios from "axios"


export default function Auth() {
   const [email,setEmail]= useState("")
   const [password,setPassword ]= useState("")


   const handleSubmit = (e) => {
        e.preventDefault() 
        const url = "http://localhost:5000"+"/api/rh/login"
     const body = {
         email:email,
         password:password
         }
      console.log(url)
      axios.post(url,body).then ((res) => {
         console.log (res.data)
         localStorage.setItem("user",res.data.token)
      })
   }    
    return (
      <Container className ="center mt-5">
               <Form onSubmit={handleSubmit} >
                     <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail (e.target.value)}/>
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword (e.target.value)}/>
                  </Form.Group>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
         </Form>   
      </Container>
  );
}