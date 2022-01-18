import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form className="login-form">
      <p className="welcome-back">
        Welcome back! Please login to your account.
      </p>
      <div>
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
      </div>
      <div className="forgot-password">
        <div className="forgot-password-remember-me">
          <input type="checkbox" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <a href="/">Forgot password?</a>
      </div>
      <div className="login-form-btns">
        <Button className="btn-login">Log in</Button>
        <Button className="btn-signup">Sign up</Button>
      </div>

      <div className="login-alternatives">
        <p>Or login with: </p>
          <a className="login-alternatives-link" href="/">Facebook</a>
          <a className="login-alternatives-link" href="/">LinkedIn</a>
          <a className="login-alternatives-link" href="/">Google</a>
      </div>
    </form>
  );
};

export default Form;
