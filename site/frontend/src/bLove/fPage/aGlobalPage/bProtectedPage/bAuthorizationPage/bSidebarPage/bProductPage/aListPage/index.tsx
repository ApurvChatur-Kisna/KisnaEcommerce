import React, { useEffect } from "react"

import ProductListChild from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bProductListChild"
import productAPISlice from "@/bLove/aAPI/endpoints/aProductAPISlice";


const ProductListPage = () => {
  // Redux
  const productList = productAPISlice.useListQuery("");

  // All Render
  // Extra Render
  useEffect(() => {
    console.log(productList)

    productList?.data?.list.map((each: any) => console.log(each))

  }, [productList])
  

  // JSX
  return (
    <React.Fragment>
      <ProductListChild />
    </React.Fragment>
  )
}

export default ProductListPage;
