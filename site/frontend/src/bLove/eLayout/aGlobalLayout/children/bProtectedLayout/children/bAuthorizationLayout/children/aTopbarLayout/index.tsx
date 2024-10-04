import TopbarComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/aTopbarComponent";
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