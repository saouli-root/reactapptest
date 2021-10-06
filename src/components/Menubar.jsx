import React, { useContext } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link , useHistory} from 'react-router-dom'
import{AuthContext} from '../auth/AuthProvider'

export default function Menubar() {
  const {user,logout} =useContext(AuthContext)
  const history = useHistory()
    const handleLogout = () => {

    logout()
    history.pushState("/")
  }
	return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand>
    <Link className="link" to = "/">
       Han Company
    </Link>   
    </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"></Nav>
       {
        user ? (
            <Nav>
              	<button className="btn link" onClick={() => history.push("/dashboard")}>Dashboard</button>
								<button className="btn link" onClick={() => history.push("/profile")}>Profile</button>
								<button className="btn link" onClick={handleLogout}>Logout</button>
            </Nav>
             ):(
            <Nav>
            <Link className="link" to="/auth"> Sign up</Link>
            <Link className="link" to="/about"> about</Link>
            </Nav>

       )
       }
  </Navbar.Collapse>
  </Container>
  </Navbar>
	)
}










     







