import React from "react";
import "./Register.css";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Register = () => {
  async function handleSubmit(evt) {
    evt.preventDefault();
    const { fullName, username, password, phone } = evt.target.elements;
    let res = await fetch(
      "https://online-excel-heroku.herokuapp.com/auth/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.value,
          username: username.value,
          password: password.value,
          phone: phone.value,
        }),
      }
    );
    let data = await res.json();
    if (data.data.success) {
      window.location.href = "/";
    }
  }

  return (
    <div className="container register">
      <form className="register__form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <TextField
          id="standard-basic"
          label="Full name"
          variant="standard"
          required
          name="fullName"
        />
        <TextField
          className="register__username"
          id="standard-basic"
          label="Username"
          variant="standard"
          required
          name="username"
        />
        <TextField
          className="register__password"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required
          name="password"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          required
          name="phone"
        />
        <Button className="register__button" variant="contained" type="submit">
          Register
        </Button>
        <Link to={"/"}>Creat new accaunt</Link>
      </form>
    </div>
  );
};

export default Register;
