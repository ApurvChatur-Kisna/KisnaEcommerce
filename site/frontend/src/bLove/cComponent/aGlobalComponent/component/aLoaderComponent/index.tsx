import React from "react"
import './index.css'


const LoaderComponent = () => {
  // JSX
  return (
    <React.Fragment>
      <div className="p-4 h-[50vh]">
        <div className="w-full h-full flex flex-col gap-24 items-center justify-center" >
          {/* <div className="flex gap-24" >
            <div className="loader-9"></div>
            <div className="loader-1"></div>
            <div className="loader-8"></div>
          </div> */}
          {/* <div className="flex gap-24" >
            <div className="loader-2"></div>
            <div className="loader-3"></div>
            <div className="loader-4"></div>
          </div>   */}
          <div className="flex gap-24">
            {/* <div className="loader-7"></div> */}
            <div className="loader-5"></div>
            {/* <div className="loader-6"></div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoaderComponent;
