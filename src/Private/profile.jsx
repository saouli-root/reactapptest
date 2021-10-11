import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React, { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { AuthContext } from '../auth/AuthProvider'

export default function Profile() {
	const [phone, setPhone] = useState("05555324135")
	const [time, setTime] = useState(new Date()) 
	const [userData, setUserData] = useState(null)
	//    varname  setter   component  initial state
	//    getter   setter
	
	function handlePhoneChange (e) {
		e.preventDefault()
		setPhone(e.target.value)
	}

	const {user} = useContext(AuthContext)
	const decodedUser = jwtDecode(user)

	useEffect(() => { // mounted
		// get from database
		const url = "http://localhost:5000/api/rh/getData"
		const body = {
			_id: decodedUser._id
		}
		axios.post(url, body).then(res => {
			setUserData(res.data) // state update
			console.log(res.data)
		}).catch(console.error)

		return () => { // unmounted
			const url = "http://localhost:5000/api/rh/timeInPage"
			const newTime = new Date()
			const body = {
				timeInPage: newTime - time
			}
			axios.post(url, body).catch(console.error)
		} 
	}, []) // updated





















	return (
		<div>
			<h1>User Profile</h1>
			<Form >
				<Form.Group className="mb-3" controlId="phone" >
					<Form.Label>Phone</Form.Label>
					<Form.Control type="text" placeholder="Enter phone number" onChange={(event) => handlePhoneChange(event)} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
				<h1>{phone}</h1>
				{ userData && <h2>{userData.email}</h2> }
			</Form>
		</div>
	)
}


































//useEffect(() => {
//get from database 
//const url = "http://localhost:5000/api/rh/getData"
//const body ={
//_id: decodedUser._id
//}

//axios.post(url,body).then(res=> {
//	setUserData(res.data) //state update
// console.log(res.data)
//}).catch(console.error)
//})


//useEffect(() => {
	//if state updated => infinit loop

	//[state update tafya my3mlhash ki kon arrat vide]
	//call when phone updated state
//},[phone]