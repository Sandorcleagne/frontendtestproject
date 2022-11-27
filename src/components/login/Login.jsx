import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [checkLogin, setCheckLogin] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const handleChange = (event) => {
    setUserData({ ...UserData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    try {
      const options = {
        method: "POST",
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
          setCheckLogin(response.data.status);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(UserData);
  console.log(checkLogin);
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
          {checkLogin === 1 ? (
            <Link to="home">
              <button onClick={(e) => handleSubmit(e)}>Login</button>
            </Link>
          ) : (
            <button onClick={(e) => handleSubmit(e)}>Login</button>
          )}
        </div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p className="text">Do Not have an account</p>
        </Link>
        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
