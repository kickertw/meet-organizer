import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './login.module.scss';

const LoginView = ({updateLoginCallback}) => {
    const [pass, setPass] = useState('');

    const checkPass = (e) => {
        if (pass === process.env.REACT_APP_ADMIN_PASS) {
            localStorage.setItem('Password', pass);
            updateLoginCallback(true, 'admin');
        } else if (pass === process.env.REACT_APP_READ_ONLY_PASS) {
            localStorage.setItem('Password', pass);
            updateLoginCallback(true, 'view');
        } else {
            alert('❌❌❌');
        }
    };

    const clearStorage = () => {
        localStorage.removeItem('Password');
        updateLoginCallback(false);
    }

    return (
        <div className={styles.LoginContainer}>
            <div className={styles.LoginForm} data-testid="LoginView">
                <img src="http://sonshinegymnastics.com/wp-content/themes/tnc-ss-gym/images/logo/logo.png" />
                <input
                    type="password"
                    className={styles.inputs}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    aria-label="password"
                />
                <Button variant="primary" onClick={checkPass} className={styles.inputs}>Go</Button>
                <Button variant="secondary" onClick={clearStorage} className={styles.inputs}>Clear</Button>
                <p>{localStorage.getItem('Password')}</p>
            </div>
        </div>
    );
};

export default LoginView;
