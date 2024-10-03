import React from "react"
import { AuthForm } from "./component/aAuthForm";


const AuthenticationComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default AuthenticationComponent;
