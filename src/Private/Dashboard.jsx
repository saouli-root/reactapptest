import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { Button } from "react-bootstrap"
import jwtDecode from 'jwt-decode'
import axios from 'axios'

export default function Dashboard() {
	const {user} = useContext(AuthContext)
	const [rating, setRating] = useState(0)

	const decoded = jwtDecode(user)

	const handleRating = async (i) => {
		setRating(i)
		const payload = {
			_id: decoded._id,
			rating: parseInt(i)
		}
		try {
			await axios.post("http://localhost:5000/api/rh/handleRating", payload)
			alert("success")
		} catch (error) {
			console.log(error)
		}
	}

	async function getRating() {
		const payload = {
			_id: decoded._id,
		}
		try {
			const res = await axios.post("http://localhost:5000/api/rh/getRating", payload)
			setRating(res.data.rating)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getRating()
	}, [])

	return (
		<div className="App">
			<h1>Dashboard</h1>
			<p>Elit cupidatat irure magna culpa irure fugiat quis cillum dolore.</p>
			<h1>{rating}</h1>
			<div style={{ flexDirection: "row" }}>
				<Button className="btn btn-large primary m-5 p-4" onClick={() => handleRating(0)}>
					<h1>0</h1>
				</Button>
				<Button className="btn btn-large primary m-5 p-4" onClick={() => handleRating(1)}>
					<h1>1</h1>
				</Button>
				<Button className="btn btn-large primary m-5 p-4" onClick={() => handleRating(2)}>
					<h1>2</h1>
				</Button>
				<Button className="btn btn-large primary m-5 p-4" onClick={() => handleRating(3)}>
					<h1>3</h1>
				</Button>
				<Button className="btn btn-large primary m-5 p-4" onClick={() => handleRating(4)}>
					<h1>4</h1>
				</Button>
				<Button className="btn btn-large primary m-5 p-4" onClick={() => handleRating(5)}>
					<h1>5</h1>
				</Button>
			</div>
		</div>
	)
}