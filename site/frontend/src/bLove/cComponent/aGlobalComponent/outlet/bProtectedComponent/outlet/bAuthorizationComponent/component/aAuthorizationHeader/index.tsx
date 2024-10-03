import React, { useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import {
  CircleUser,
  Home,
  LineChart,
  Loader,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Timer,
  Users2,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/aConnection/aShadcnConnection/components/ui/breadcrumb"
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/aConnection/aShadcnConnection/components/ui/tooltip"

import { ModeToggle } from '@/aConnection/aShadcnConnection/components/mode-toggle'
import FullRoute from "@/bLove/fRoute/bFullRoute"
import { cn } from "@/aConnection/aShadcnConnection/lib/utils"
import EndpointRoute from "@/bLove/fRoute/aEndpointRoute"


const AuthorizationHeader = ({ children }: { children: React.ReactNode }) => {
  // Variables
  const { pathname } = useLocation();
  
  // All Render
  // Extra Render
  useEffect(() => {
    console.log(pathname, EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute )
  }, [pathname])
    

  // JSX
  return (
    <React.Fragment>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 py-4">

              {/* Logo */}
              <Link to={FullRoute.GlobalRoute.UnprotectedRoute.HomeRoute} className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base" >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>

              {/* Menu */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderListRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderListRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Orders</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Orders</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductListRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === EndpointRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductListRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Package className="h-5 w-5" />
                    <span className="sr-only">Products</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Products</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={FullRoute.GlobalRoute.UnprotectedRoute.CountdownRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === EndpointRoute.GlobalRoute.UnprotectedRoute.CountdownRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Timer className="h-5 w-5" />
                    <span className="sr-only">Countdown</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Countdown</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={FullRoute.GlobalRoute.UnprotectedRoute.LoaderRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === EndpointRoute.GlobalRoute.UnprotectedRoute.LoaderRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Loader className="h-5 w-5" />
                    <span className="sr-only">Loader</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Loader</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to={FullRoute.GlobalRoute.UnprotectedRoute.SettingRoute} className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8" >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      to="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                      to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.DashboardRoute}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.OrderRoute.OrderListRoute}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                    </Link>
                    <Link
                      to={FullRoute.GlobalRoute.ProtectedRoute.AuthorizationRoute.SidebarRoute.ProductRoute.ProductListRoute}
                      className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      to={FullRoute.GlobalRoute.UnprotectedRoute.CountdownRoute}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Counter
                    </Link>
                    <Link
                      to={FullRoute.GlobalRoute.UnprotectedRoute.LoaderRoute}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Loader
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Products</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>All Products</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
              <ModeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    {true ? <CircleUser className="h-5 w-5" /> : <img
                      src="/placeholder-user.jpg"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            { children }
          </div>
        </div>
      </TooltipProvider>
    </React.Fragment>
  )
}

export default AuthorizationHeader;
