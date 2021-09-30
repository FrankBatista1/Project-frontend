import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Views/HomePage';
import LoginPage from './Views/LoginPage'
import SignUpPage from './Views/SignUpPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/signup" component={SignUpPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
