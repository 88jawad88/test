import React from "react";
import { NavLink } from "react-router-dom";

class SignInPage extends React.Component {
  render() {
    return (
      <section className="section-signin">
        <div className="container">
          <h2 className="header-singin">sign in</h2>
          <div className="hero-singin">
            <h2>sharebook</h2>
            <p>
              new customer? start here
              <NavLink exact to ="./signUp" className="sign-up-now"> sign up</NavLink>now!
            </p>
          </div>
          <div className="reader-seller-butt">
            <NavLink exact to="./">
              Reader
            </NavLink>
            <NavLink exact to="./seller">
              Seller
            </NavLink>
          </div>
          <form className="form-signin">
            <input
              id="email-signin"
              type="Email"
              placeholder="email"
              required
            />
            <input
              id="password-signin"
              type="password"
              placeholder="password"
              required
            />
            <input id="sign-in-butt" type="button" value="SIGN IN" />
          </form>
        </div>
      </section>
    );
  }
}

export default SignInPage;
