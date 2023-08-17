'use client'

import { useState, useEffect } from "react";

const LoginComponent = (): JSX.Element => {
  return (
    <div>
      <h2>Sign in to Carbee</h2>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Sign in</button>
        <div>
          <span>
            Don&apos;t have an account? <a href="?signup">Sign up</a>
          </span>
        </div>
      </form>
    </div>
  );
};

const SignupComponent = (): JSX.Element => {
  return (
    <div>
      <h2>Sign up for Carbee</h2>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            required
          />
        </div>
        <button type="submit">Sign up</button>
        <div>
          <span>
            Already have an account? <a href="?login">Sign in</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default function AuthComponent(router: any) {
  return (
    <>
      {router.query.login ? <LoginComponent /> : <SignupComponent />} 
    </>
  )
}