import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './views/login';
import EventTable from './components/event-table';
import { Button } from 'react-bootstrap';
// import { Link, Switch } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function App() {    
    const [isAuth, setAuth] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        setAuth(localStorage.getItem('Password') != null);
        setRole(localStorage.getItem('Role'))
    },[]);

    const updateLogin = (isLoggedIn, userRole) => {
        setAuth(isLoggedIn);
        if (isLoggedIn) {
            setRole(userRole);
        }
    }

    const logout = () => {
        localStorage.removeItem('Password');
        localStorage.removeItem('Role');
        setAuth(null);
        setRole('');
    }

    if (!isAuth) {
        return (<LoginView updateLoginCallback={updateLogin} />);
    } else {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Button variant='secondary' onClick={logout} >Logout</Button>
                </header>
                <EventTable />
            </div>
        );
    }
}

export default App;
