
import {Link} from 'react-router-dom'
import {useState} from 'react'

const SignUpPage = () => {
  const [user, setUser] = useState({
    name:'',
    email: '',
    password: '',
    confirmPassword: '',
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
        <label>Name</label>
        <input
        onChange={handleChange}
        value={user.name}
        type="text"
        name="name"
        placeholder="Name"
         />
         <label>Email</label>
         <input 
          onChange={handleChange}
          value={user.email}
          type="text"
          name="email"
          placeholder="Email"
         />
         <label>Password</label>
         <input 
         onChange={handleChange}
         value={user.password}
         type="text"
         name="password"
         placeholder="Password"
         />
         <label>Confirm Password</label>
         <input
         onChange={handleChange}
         value={user.confirmPassword}
         type="text"
         name="confirmPassword"
         placeholder="Confirm Password"
         />
      </form>
      <Link to="/login">Already have an account?</Link>
      <br/>
      <Link to ="/">Home</Link>
    </div>
  )
}

export default SignUpPage
