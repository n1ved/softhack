import "./login.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://3.27.250.15:8000/fintech/login_view", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      mode: "cors",
    });
    const result = await response.json();
    console.log(result);
    if (result.status === "success") {
      console.log("proceed login");
      navigate('/dashboard')
    }else{
        alert("wrong password or username")
    }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login-container">
      <div className="login-image">
        <div className="form-container">
          <div className={"sign-in-title"}>
            Sign in to <span className="hl">Lorem</span>{" "}
          </div>
          <hr />
          <form className="login-form" method="POST" action="{%url 'login'%}">
            <input
              type={"text"}
              className="input-text"
              name="username"
              onChange={handleUsernameChange}
              placeholder="username"
            />
            <input
              type={"password"}
              className="input-text"
              name="password"
              onChange={handlePasswordChange}
              placeholder="password"
            />
            <input
              type={"submit"}
              value={"Sign In"}
              className="input-submit"
              onClick={handleSubmit}
            />
          </form>
          <div className={"sign-up-link"}>
            Don&apos;t have an account ? <a href={"/register"}>Sign Up</a>{" "}
            Instead
          </div>
        </div>
      </div>
    </div>
  );
}
