import React, { useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext({
    login: (email, password) => {},
	logout: () => {}
})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return <AuthContext.Provider value={{
		user,
        login: async (email, password) => {
			const url = "http://localhost:5000/api/rh/login"
			const body = {
				email: email,
				password: password
			}
			const res = await axios.post(url, body)
			localStorage.setItem("user", res.data.token)
			setUser(res.data.token)
		},
		logout: () => {
			localStorage.removeItem("user")
			setUser(null)
		}
    }}>{children}</AuthContext.Provider>
}