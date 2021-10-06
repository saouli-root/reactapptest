
  import React  from "react";
  import'bootstrap/dist/css/bootstrap.min.css'
  import './App.css';
  import ReactRouter from "./Router";
import { AuthProvider } from "./auth/AuthProvider";

  export default function App() {
    return    <AuthProvider>
            <ReactRouter/>
            </AuthProvider>

            }