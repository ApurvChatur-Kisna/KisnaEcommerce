import React from "react"
import { Outlet } from "react-router-dom";

import UnprotectedComponent from "@/bLove/cComponent/aGlobalComponent/children/aUnprotectedComponent";


const UnprotectedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      <UnprotectedComponent>
        <Outlet />
      </UnprotectedComponent>
    </React.Fragment>
  )
}

export default UnprotectedLayout; 
