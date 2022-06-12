import React from "react";
import { TextField, Button } from "@mui/material";
import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Login";
const Login = () => {
  let { setToken } = React.useContext(Context);
  async function handleSubmit(evt) {
    evt.preventDefault();
    const { username, password } = evt.target.elements;
    let res = await fetch(
      "https://online-excel-heroku.herokuapp.com/auth/token",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      }
    );
    let data = await res.json();
    if (data.data.success) {
      setToken(data.data.data.accessToken);
    } else alert(data.data.error.message);
  }
  return (
    <div className="container login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <TextField
          className="login__username"
          id="standard-basic"
          label="Username"
          variant="standard"
          required
          name="username"
        />
        <TextField
          className="login__password"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required
          name="password"
        />
        <Button className="login__button" variant="contained" type="submit">
          log in
        </Button>
        <Link to={"/register"}>Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
