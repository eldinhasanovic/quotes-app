import { useState, useContext, useEffect } from "react";
// import { BASE_URL } from "../../config/Api";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./Login.css";
import axios from "axios";
export default function Login() {
  const navigation = useNavigate();
  const [token, setToken] = useState("");

  async function loginUser(data) {
    try {
      const user = await axios.post(`http://localhost:8000/sessions`, data);
      const userInfo = await user.data;
      console.log(userInfo.accessToken);
      localStorage.setItem("token", userInfo.accessToken);
      setToken(userInfo.accessToken);
      navigation(0);
    } catch (err) {
      setToken(null);
      console.log("Greska");
    }
  }

  function handleClick(e) {
    e.preventDefault();
    loginUser({
      username,
      password,
    });
  }
  //   setTimeout(() => {
  //     if (token.length > 5) {
  //       window.location.reload(true);
  //     }
  //   }, 3000);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="cointener">
        <form>
          <h1 id="loginHeading">Login</h1>
          {/* <p id="msg">{Msg}</p> */}
          <label className="label">Email</label>
          <input
            className="input"
            // type="email"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Email"
            name="email"
            required
          ></input>
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button onClick={handleClick} id="reg">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
