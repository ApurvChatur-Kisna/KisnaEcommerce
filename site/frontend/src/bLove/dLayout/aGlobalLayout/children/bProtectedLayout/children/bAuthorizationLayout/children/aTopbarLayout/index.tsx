import TopbarComponent from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/bAuthorizationComponent/aTopbarComponent";
import React from "react"
import { Outlet } from "react-router-dom";


const TopbarLayout = () => {
  // JSX
  return (
    <React.Fragment>
      <TopbarComponent>
        <Outlet />
      </TopbarComponent>
    </React.Fragment>
  )
}

export default TopbarLayout; 