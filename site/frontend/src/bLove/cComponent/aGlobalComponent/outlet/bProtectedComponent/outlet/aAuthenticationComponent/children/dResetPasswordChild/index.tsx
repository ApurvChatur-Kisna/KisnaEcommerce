import React from "react"
import { Link } from "react-router-dom"

import { Button } from "@/aConnection/aShadcnConnection/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/aConnection/aShadcnConnection/components/ui/card"
import { Input } from "@/aConnection/aShadcnConnection/components/ui/input"
import { Label } from "@/aConnection/aShadcnConnection/components/ui/label"
import FullRoute from "@/bLove/gRoute/bFullRoute"


const ResetPasswordChild = () =>{
  // JSX
  return (
    <React.Fragment>
      <div className="h-full flex flex-1 items-center justify-center" >
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Reset Password</CardTitle>
            <CardDescription>
              Enter your new password to reset
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div> */}
              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
              {/* <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to={FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignInRoute} className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default ResetPasswordChild;
