import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './views/login';
import { Button } from 'react-bootstrap';
import EventSchedule from './views/event-schedule';
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
            localStorage.setItem('Role', userRole)
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
        const eventHeaders = ['Name', 'Age', 'Event', 'Session', 'Time'];
        return (
            <div className="App">
                <header>
                    I am a ☕
                </header>
                <div style={{margin: 4 + 'em'}}>
                    <EventSchedule />
                </div>
                <Button variant='secondary' onClick={logout} >Logout</Button>
            </div>
        );
    }
}

export default App;
