import React from "react"

import AuthorizationHeader from "./component/aAuthorizationHeader"


const AuthorizationComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      <AuthorizationHeader>
        { children }
      </AuthorizationHeader>
    </React.Fragment>
  )
}

export default AuthorizationComponent;
