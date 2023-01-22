import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import './Login.css';

export default function Login() {
  
  const email = useRef();
  const password = useRef();
  const {user, isFetcing, error, dispatch} = useContext(AuthContext);

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },dispatch
      );
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>ReadSNS</h3>
          <span className="loginDesc">本格的なSNS</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={ (e) => handleSubmit(e)}>
            <p className="loginMessage">ログインはこちら</p>
            <input type="email" className='loginInput' placeholder='Eメール' required ref={email}/>
            <input type="password" className='loginInput' placeholder='パスワード'  required minLength="6" ref={password}/>
            <button type='submit' className='loginButton'>ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">登録</button>
          </form>
        </div>
      </div>
    </div>
  )
}
