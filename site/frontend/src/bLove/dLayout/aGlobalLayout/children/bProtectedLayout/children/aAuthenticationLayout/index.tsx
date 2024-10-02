import React from "react"
import { Outlet } from "react-router-dom";

import AuthenticationComponent from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/aAuthenticationComponent";


const AuthenticationLayout = () => {
  // JSX
  return (
    <React.Fragment>
      <AuthenticationComponent>
        <Outlet/>
      </AuthenticationComponent>
    </React.Fragment>
  )
}

export default AuthenticationLayout; 
