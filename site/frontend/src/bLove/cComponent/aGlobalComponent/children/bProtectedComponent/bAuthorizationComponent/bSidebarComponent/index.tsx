import React from "react"


const SidebarComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default SidebarComponent;
