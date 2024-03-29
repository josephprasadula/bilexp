import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
// import { Login } from './components/login';
// import Login_smart from './containers/login_container';
// import { Landing } from './components/landing';
// import  SignUp  from './components/signup';
import {Dashboard} from './Dashboard';
// import  AuthComponent  from './containers/AuthComponent';

function App() {
  return (
    <Switch>
      <Route exact path = "/" component = {Dashboard}></Route>
      {/* <Route exact path = "/Dashboard" component = {Dashboard}></Route> */}
    </Switch>
  );
}

export default App;

