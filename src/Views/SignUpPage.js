
import {Link} from 'react-router-dom'
import {useState} from 'react'

const SignUpPage = () => {
  const [user, setUser] = useState({
    name:'',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState("");


  const handleChange = (event) => {
    event.preventDefault()
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
        {error ? <span style={{color: 'rgb(209, 2, 20)'}}>{error}</span> : <span>Please enter your credentials</span>}
        </p>
      </div>
      <form onSubmit={""} className="mt-8 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
          </div>
          <div>
            <input
               onChange={handleChange}
              name="name"
              value={user.name}
              type="email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={user.email}
              type="email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <input
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              placeholder="Password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
            />
            <input
              onChange={handleChange}
              name="confirmPassword"
              value={user.confirmPassword}
              type="password"
              placeholder="Confirm password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link to="/login"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Already have an account?
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUpPage
// eslint-disable-next-line no-lone-blocks
{/* <div>
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
</div> */}