import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

//check weather uske children ko render krna hai y nahi.

export default function Protected({ children, authentication = true }) {

    //navigate weather user is move somewhere or not.
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {

        if(authentication && authStatus !== authentication){
            console.log(authStatus)
            navigate("/login")
        }
        // to navigate unruthenticated persons to the home pages when authentication is false
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentication])

  return loader ? <h2>Loading...</h2> : <>{children}</>
}