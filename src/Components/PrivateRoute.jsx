import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import {useAuthStatus} from "../Hooks/useAuthStatus"

export default function PrivateRoute() {
    const {loggegIn, checkingStatus} = useAuthStatus();

    if(checkingStatus){
      return <h3> Loading...</h3>
    }
    
  return loggegIn ? <Outlet/> : <Navigate to = "/sign-in" />;
}
