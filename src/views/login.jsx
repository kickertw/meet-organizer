import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './login.module.scss';

const LoginView = () => {
  const [pass, setPass] = useState('');

  const checkPass = (e) => {
    if (pass === process.env.REACT_APP_ADMIN_PASS) {
        alert('Admin');
    } else if (pass === process.env.REACT_APP_READ_ONLY_PASS) {
        alert('Read Only');
    } else {
        alert('❌❌❌');
    }
  };

  return (
    <div className={styles.LoginView} data-testid="LoginView">
        <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            aria-label="password"
        />
        <Button variant="primary" onClick={checkPass}>Go</Button>
    </div>
  );
};

export default LoginView;
