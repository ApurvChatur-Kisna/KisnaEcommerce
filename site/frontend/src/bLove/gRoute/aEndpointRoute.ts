const EndpointRoute = {
  GlobalRoute: {
    UnprotectedRoute: {
      HomeRoute: "",
      LoaderRoute: "loader",
      CountdownRoute: "countdown",
      SettingRoute: "setting",
    },
    ProtectedRoute: {
      AuthenticationRoute: {
        SignInRoute: "sign-in",
        SignUpRoute: "sign-up",
        ForgotPasswordRoute: "forgot-password",
        ResetPasswordRoute: "reset-password"
      },
      AuthorizationRoute: {
        TopbarRoute: {

        },
        SidebarRoute: {
          DashboardRoute: "dashboard",
          ProductRoute: {
            ProductListRoute: "product-list",
            ProductCreateRoute: "product-create",
            ProductRetrieveRoute: "product-retrieve",
            ProductUpdateRoute: "product-update",
            ProductDeleteRoute: "product-delete",
          },
  
          OrderRoute: {
            OrderListRoute: "order-list",
            OrderCreateRoute: "order-create",
            OrderRetrieveRoute: "order-retrieve",
            OrderUpdateRoute: "order-update",
            OrderDeleteRoute: "order-delete",
          },
        }
      }
    }
  }
}

export default EndpointRoute;
