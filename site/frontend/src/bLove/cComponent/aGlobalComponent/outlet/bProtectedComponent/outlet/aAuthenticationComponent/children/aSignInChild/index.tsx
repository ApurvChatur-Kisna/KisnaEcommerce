import React from "react"

import { Button } from "@/aConnection/aShadcnConnection/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/aConnection/aShadcnConnection/components/ui/card"
import { Input } from "@/aConnection/aShadcnConnection/components/ui/input"
import { Label } from "recharts"
import { Link } from "react-router-dom"
import FullRoute from "@/bLove/gRoute/bFullRoute"


const SignInChild = () => {
  // JSX
  return (
    <React.Fragment>
      <div className="h-full flex flex-1 items-center justify-center" >
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign In</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label>Password</Label>
                  <Link to={FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ForgotPasswordRoute} className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to={FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignUpRoute} className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default SignInChild;
