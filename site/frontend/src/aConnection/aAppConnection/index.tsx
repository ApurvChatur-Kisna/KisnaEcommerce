import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

import { Toaster } from "@/aConnection/aShadcnConnection/components/ui/toaster";
import EndpointRoute from "@/bLove/fRoute/aEndpointRoute";
import HomePage from "@/bLove/ePage/aGlobalPage/aUnprotectedPage/aHomePage";
import DashboardChild from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/bAuthorizationComponent/bSidebarComponent/children/aDashboardChild";
import ProductListChild from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/bAuthorizationComponent/bSidebarComponent/children/bProductListChild";
import ProductUpdateChild from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/bAuthorizationComponent/bSidebarComponent/children/cProductUpdateChild";
import OrderChild from "@/bLove/cComponent/aGlobalComponent/children/bProtectedComponent/bAuthorizationComponent/bSidebarComponent/children/dOrderChild";
import CountdownComponent from "@/bLove/cComponent/aGlobalComponent/component/bCountdownComponent";
import LoaderComponent from "@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent";
import PageNotFoundComponent from "@/bLove/cComponent/aGlobalComponent/component/cPageNotFoundComponent";
import SettingComponent from "@/bLove/cComponent/aGlobalComponent/component/dSettingComponent";

// Layout
const GlobalLayout = React.lazy(() => import('@/bLove/dLayout/aGlobalLayout'));
const UnprotectedLayout = React.lazy(() => import('@/bLove/dLayout/aGlobalLayout/children/aUnprotectedLayout'));
const ProtectedLayout = React.lazy(() => import('@/bLove/dLayout/aGlobalLayout/children/bProtectedLayout'));
const AuthenticatedLayout = React.lazy(() => import('@/bLove/dLayout/aGlobalLayout/children/bProtectedLayout/children/aAuthenticationLayout'));
const AuthorisedLayout = React.lazy(() => import('@/bLove/dLayout/aGlobalLayout/children/bProtectedLayout/children/bAuthorizationLayout'));
const TopbarLayout = React.lazy(() => import('@/bLove/dLayout/aGlobalLayout/children/bProtectedLayout/children/bAuthorizationLayout/children/aTopbarLayout'));
const SidebarLayout = React.lazy(() => import('@/bLove/dLayout/aGlobalLayout/children/bProtectedLayout/children/bAuthorizationLayout/children/bSidebarLayout'));

// Page


const AppConnection = () => {
  // JSX  
  return (
    <React.Fragment>
      <Helmet>
        <title>HK Jewels - KISNA</title>
        <link rel="icon" href="./public/Business/ApurvChatur/favicon_io/favicon.ico" />
      </Helmet>
      <Toaster />

      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route element={<GlobalLayout />} >

            <Route path="loader" element={<LoaderComponent />} />

            <Route element={<UnprotectedLayout />} >
              <Route path={EndpointRoute.GlobalRoute.UnprotectedRoute.HomeRoute} element={<HomePage />} />
              <Route path={EndpointRoute.GlobalRoute.UnprotectedRoute.LoaderRoute} element={<LoaderComponent />} />
            </Route>

            <Route element={<ProtectedLayout />} >
              <Route element={<AuthenticatedLayout />} >
                <Route path={EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignInRoute} element={<h1>Sign In</h1>} />
                <Route path={EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignUpRoute} element={<h1>Sign Up</h1>} />
                <Route path={EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ForgotPasswordRoute} element={<h1>Forgot Password</h1>} />
                <Route path={`${EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ResetPasswordRoute}/:token`} element={<h1>Reset Password</h1>} />
              </Route>

              <Route element={<AuthorisedLayout />} >
                <Route element={<TopbarLayout />} >
                  {/* <Route path={EndpointRoute.ContentRoute.TopbarRoute.ProfileRetrieveRoute} element={<ProfileRetrievePage />} /> */}
                  {/* <Route path={EndpointRoute.ContentRoute.TopbarRoute.ProfileUpdateRoute} element={<ProfileUpdatePage />} /> */}
                  {/* <Route path={EndpointRoute.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute} element={<ProfilePasswordUpdatePage />} /> */}
                  {/* <Route path={EndpointRoute.ContentRoute.TopbarRoute.ProfileDeleteRoute} element={<ProfileDeletePage />} /> */}
                </Route>

                <Route element={<SidebarLayout />} >
                  <Route path={EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute} element={<DashboardChild />} />

                  <Route path={EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductListRoute} element={<ProductListChild />} />
                  <Route path={EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductUpdateRoute} element={<ProductUpdateChild />} />

                  <Route path={EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderListRoute} element={<OrderChild />} />

                  <Route path={EndpointRoute.GlobalRoute.UnprotectedRoute.CountdownRoute} element={<CountdownComponent day={15} month={10} year={2024} />} />
                  <Route path={EndpointRoute.GlobalRoute.UnprotectedRoute.SettingRoute} element={<SettingComponent />} />
                </Route>
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<PageNotFoundComponent />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  )
}

export default AppConnection;
