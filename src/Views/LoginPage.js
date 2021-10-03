
import { Link } from "react-router-dom";
import {useState, useContext, useEffect} from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

const LoginPage = ({history}) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/calendar");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${apiUrl}/auth/login`,
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/calendar");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div>
      <form onSubmit={loginHandler}>
        <label>email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          type="text"
          placeholder="Email"
        />
        <label>password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
        />
      <button type="submit">Login</button>
      {error && <span className="error-message">{error}</span>}
      </form>
      <Link to="/signup">Doesn't have an account?</Link>
      <br/>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/calendar">Fake login to test</Link>
    </div>
  );
  }

export default LoginPage;
