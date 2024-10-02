import SidebarComponent from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/bAuthorizationComponent/bSidebarComponent";
import React from "react"
import { Outlet } from "react-router-dom";


const SidebarLayout = () => {
  // JSX
  return (
    <React.Fragment>
      <SidebarComponent>
        <Outlet />
      </SidebarComponent>
    </React.Fragment>
  )
}

export default SidebarLayout; 