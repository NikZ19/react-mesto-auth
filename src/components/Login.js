import React from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from '../Auth.js';

export function Login({ handleLogin, setIsInfoTooltipPopupOpen, setIsSuccessful }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.authorize(email, password).then(data => {
      if (data.token) {
        setEmail('');
        setPassword('');
        handleLogin();
        history.push('/');
      } else {
        setIsSuccessful(false);
        setIsInfoTooltipPopupOpen(true);
      }
    })
      .catch(err => {
        console.log(err)
        setIsSuccessful(false);
        setIsInfoTooltipPopupOpen(true);
      });
  }

  return (
    <section className="auth">
      <h1 className="auth__title" >Вход</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input className="auth__input auth__input_margin" value={email || ''} onChange={handleChangeEmail} placeholder="Email" type="email"></input>
        <input className="auth__input auth__input_margin" value={password || ''} onChange={handleChangePassword} placeholder="Пароль" type="password" minLength="5"></input>
        <button className="auth__submit-button" type='submit'>Войти</button>
      </form>
    </section>
  )
}
