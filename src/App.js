import logo from './logo.svg';
import './App.css';
import LoginView from './views/login';
// import { Link, Switch } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <LoginView />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div>
    //       <Link to="/test">Test</Link> | &nbsp; <Link to="/test2">Test2</Link>
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;
