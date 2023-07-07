import { useState, useContext, useEffect } from "react";
import { BASE_URL } from "../../config/Api";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./Login.css";
import axios from "axios";

export default function Login() {
  // token = "";
  // const [token, setToken] = useState("");
  var token = "";
  async function loginUser(data) {
    try {
      const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
      const user = await axios.post(`http://localhost:8000/sessions`, data);
      const userInfo = await user.data;
      console.log(userInfo.accessToken);
      localStorage.setItem("token", userInfo.accessToken);
      return (token = userInfo.accessToken);
      //   setToken(userInfo.token);
      //   navigation("/");
    } catch (err) {
      console.log("Greska");
      localStorage.removeItem("token");
      //   setToken(null);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    loginUser({
      username,
      password,
    });
    // useEffect(() => {
    //   axios
    //     .get("http://localhost:8000/quotes", {
    //       headers: { Authorization: "Bearer " + token },
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log);
    // }, []);
    // console.log(token);
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      (
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
      )
    </>
  );
}
