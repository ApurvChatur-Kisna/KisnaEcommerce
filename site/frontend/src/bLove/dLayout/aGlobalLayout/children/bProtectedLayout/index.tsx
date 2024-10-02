import React from "react"
import { Outlet } from "react-router-dom";

import ProtectedComponent from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent";


const ProtectedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      <ProtectedComponent>
        <Outlet />
      </ProtectedComponent>
    </React.Fragment>
  )
}

export default ProtectedLayout; 
