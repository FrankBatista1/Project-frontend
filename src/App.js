import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage'
import SignUpPage from './views/SignUpPage'
import WorkoutViews from './views/SingleDayView';
import MyPlanner from './views/MyPlanner'
import UserView from './views/UserView';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/signup" component={SignUpPage}></Route>
        <UserView exact path="/calendar" component={MyPlanner}></UserView>
        <Route exact path="/singleday" component={WorkoutViews}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
