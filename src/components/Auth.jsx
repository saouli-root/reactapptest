import React , {useState , useContext} from 'react'
import {Form , Button , Container} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { AuthContext } from '../auth/AuthProvider'

export default function Auth({props}) {
   const [email,setEmail]= useState("")
   const [password,setPassword ]= useState("")
   const {login} = useContext(AuthContext)
   const history =useHistory()
   const handleSubmit =  (e) => {
        e.preventDefault()
        login(email, password)
         history.push("/")
       //window.location.href = '/'
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