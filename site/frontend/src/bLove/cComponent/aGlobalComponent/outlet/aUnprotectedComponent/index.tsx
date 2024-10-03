import React from "react"
import { Link } from "react-router-dom"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import FullRoute from "@/bLove/fRoute/bFullRoute"

import { Button } from "@/aConnection/aShadcnConnection/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/aConnection/aShadcnConnection/components/ui/dropdown-menu"
import { Input } from "@/aConnection/aShadcnConnection/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/aConnection/aShadcnConnection/components/ui/sheet"
import { ModeToggle } from "@/aConnection/aShadcnConnection/components/mode-toggle"


const UnprotectedComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link to={FullRoute.GlobalRoute.UnprotectedRoute.HomeRoute} className="flex items-center gap-2 text-lg font-semibold md:text-base" >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderListRoute}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductListRoute}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <Link
              to={FullRoute.GlobalRoute.UnprotectedRoute.CountdownRoute}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Countdown
            </Link>
            <Link
              to={FullRoute.GlobalRoute.UnprotectedRoute.LoaderRoute}
              className="text-foreground transition-colors hover:text-foreground"
            >
              Loader
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to={FullRoute.GlobalRoute.UnprotectedRoute.HomeRoute}
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Link
                  to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderListRoute}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Orders
                </Link>
                <Link
                  to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductListRoute}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
                <Link
                  to={FullRoute.GlobalRoute.UnprotectedRoute.CountdownRoute}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Counter
                </Link>
                <Link 
                  to={FullRoute.GlobalRoute.UnprotectedRoute.LoaderRoute} 
                  className="hover:text-foreground"
                >
                  Loader
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Check Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                  <DropdownMenuItem>Change Password</DropdownMenuItem>
                  <DropdownMenuItem>Close Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to={FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignInRoute} >Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignUpRoute} >Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ForgotPasswordRoute} >Forgot Password</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={`${FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ResetPasswordRoute}/hello-boi`} >Reset Password</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        { children }
      </div>
    </React.Fragment>
  )
}

export default UnprotectedComponent;
