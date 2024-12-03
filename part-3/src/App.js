import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Users from './Users.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Signin from './signin.js';
import Signup from './signup.js';
import Profile from './profile.js';
function App() {
  return (
    <div className="App">
      <NavBar />
     
     <Routes>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = '/users' element  = {<Users />}></Route>
      <Route path = '/myProfile' element = {<Profile />}></Route>
      <Route path = '/signup' element = {<Signup />}></Route>
      <Route path = '/signin' element = {<Signin />}></Route>
     </Routes>
    </div>

  );
}

export default App;
