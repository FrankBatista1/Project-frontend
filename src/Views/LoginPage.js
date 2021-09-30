
import { Link } from "react-router-dom";
import {useState} from 'react'

const LoginPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    event.preventDefault()
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <form>
        <label>email</label>
        <input
          onChange={handleChange}
          name="email"
          value={user.email}
          type="text"
          placeholder="Email"
        />
        <label>password</label>
        <input
          onChange={handleChange}
          name="password"
          value={user.password}
          type="text"
          placeholder="Password"
        />
      </form>
      <Link to="/signup">Doesn't have an account?</Link>
      <br/>
      <Link to="/">Home</Link>
    </div>
  );
};

export default LoginPage;
