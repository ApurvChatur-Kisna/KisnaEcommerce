import React from "react"
import { Outlet } from "react-router-dom";

import AuthorizationComponent from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/bAuthorizationComponent";


const AuthorizationLayout = () => {
  // JSX
  return (
    <React.Fragment>
      <AuthorizationComponent>
        <Outlet />
      </AuthorizationComponent>
    </React.Fragment>
  )
}

export default AuthorizationLayout; 