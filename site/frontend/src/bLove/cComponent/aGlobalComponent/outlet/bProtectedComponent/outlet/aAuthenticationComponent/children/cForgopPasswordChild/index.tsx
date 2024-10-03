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
import FullRoute from "@/bLove/fRoute/bFullRoute"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/aConnection/aShadcnConnection/components/ui/input-otp"


const ForgotPasswordChild = () =>{
  // JSX
  return (
    <React.Fragment>
      <div className="h-full flex flex-1 items-center justify-center" >
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Forgotten Password?</CardTitle>
            <CardDescription>
              Enter your information to reset password
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
              </div> */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div> */}
              <Button type="submit" className="w-full">
                <Link to={`${FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ResetPasswordRoute}/hello-boi`} >Request OTP</Link>
              </Button>
              {/* <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to={FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.SignUpRoute} className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
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
              </div> */}
              <div className="grid gap-2">
                <Label htmlFor="email">Confirm OTP</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div> */}
              <Button type="submit" className="w-full">
                <Link to={`${FullRoute.GlobalRoute.ProtectedRoute.AuthenticationRoute.ResetPasswordRoute}/hello-boi`} >Proceed to Reset</Link>
              </Button>
              {/* <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button> */}
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

export default ForgotPasswordChild;
