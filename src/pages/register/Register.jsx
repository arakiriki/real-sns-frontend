import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //パスワードの照合確認
    if(password.current.value !== passwordConfirmation.current.value){
      passwordConfirmation.current.setCustomValidity("パスワードが違います")
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };

        await axios.post("auth/register",user);
        navigate("/login");
      } catch(err) {
        console.log(err);
      }
    }
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
            <p className="loginMessage">新規登録はこちら</p>
            <input type="text" className='loginInput' placeholder='ユーザー名' required ref={ username }/>
            <input type="email" className='loginInput' placeholder='Eメール'  required ref={ email }/>
            <input type="password" className='loginInput' placeholder='パスワード' required ref={ password }/>
            <input type="password" className='loginInput' placeholder='パスワード(確認用)' required ref={ passwordConfirmation }/>
            <button className='loginButton' type='submit'>サインアップ</button>
            <button className="loginRegisterButton">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  )
}
