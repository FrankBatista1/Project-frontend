


const MyPlanner = ({history}) => {
  const logoutHandler = () => {
    localStorage.removeItem('authToken')
    history.push('/');
  }

  const YourName = 'xd'
  return (
    <div>
      <div>{YourName}</div>
      <button onClick={logoutHandler}>Log out</button>
    </div>
    
  )
}

export default MyPlanner
