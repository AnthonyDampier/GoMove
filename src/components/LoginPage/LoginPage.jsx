import React from 'react';
import '../LoginPage/LoginPage.css';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div id="login-page">
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Sign Up
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
