import React , {useContext} from 'react'
import {AuthContext} from '../auth/AuthProvider'

export default function DashBoard() {
    const {user} = useContext (AuthContext)
    console.log(user)

    return (
        <div>
         <h1> User Very Private Dashboard </h1>   
        </div>
    )
}
