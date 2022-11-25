import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...UserData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/api/loggedindata",
      headers: { "Content-Type": "application/json" },
      data: { email: UserData.email, password: UserData.password },
    };
    console.log("data", options.data);
    console.log("email", UserData.email);
    console.log("pasword", UserData.password);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={UserData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={UserData.password}
          onChange={handleChange}
        />
        <div className="login-btn">
          <button onClick={(e) => handleSubmit(e)}>Login</button>
        </div>
        <p className="text">Or login using</p>
        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
