import EndpointRoute from "./aEndpointRoute";

const FullRoute = {
  GlobalRoute: {
    UnprotectedRoute: {
      HomeRoute: `/${EndpointRoute.GlobalRoute.UnprotectedRoute.HomeRoute}`,
      LoaderRoute: `/${EndpointRoute.GlobalRoute.UnprotectedRoute.LoaderRoute}`,
      CountdownRoute: `/${EndpointRoute.GlobalRoute.UnprotectedRoute.CountdownRoute}`,
      SettingRoute: `/${EndpointRoute.GlobalRoute.UnprotectedRoute.SettingRoute}`,
    },
    ProtectedRoute: {
      AuthenticationRoute: {
        SignInRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignInRoute}`,
        SignUpRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignUpRoute}`,
        ForgotPasswordRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ForgotPasswordRoute}`,
        ResetPasswordRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ResetPasswordRoute}`
      },
      AuthorizationRoute: {
        TopbarRoute: {

        },
        SidebarRoute: {
          DashboardRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute}`,
          ProductRoute: {
            ProductListRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductListRoute}`,
            ProductCreateRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductCreateRoute}`,
            ProductRetrieveRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductRetrieveRoute}`,
            ProductUpdateRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductUpdateRoute}`,
            ProductDeleteRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductDeleteRoute}`,
          },
  
          OrderRoute: {
            OrderListRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderListRoute}` ,
            OrderCreateRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderCreateRoute}` ,
            OrderRetrieveRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderRetrieveRoute}` ,
            OrderUpdateRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderUpdateRoute}` ,
            OrderDeleteRoute: `/${EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderDeleteRoute}` ,
          },
        }
      }
    }
  }
}

export default FullRoute;
