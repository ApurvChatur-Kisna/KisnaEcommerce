import React from "react"


const TopbarComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default TopbarComponent;
