import React from "react"


const GlobalComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default GlobalComponent;
