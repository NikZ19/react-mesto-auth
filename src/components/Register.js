import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as auth from '../Auth.js';

export function Register({ setIsInfoTooltipPopupOpen, setIsSuccessful }) {

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
    auth.register(email, password).then(res => {
      if (res) {
        setIsSuccessful(true);
        setIsInfoTooltipPopupOpen(true);
        history.push('/signin');
      } else {
        setIsSuccessful(false);
        setIsInfoTooltipPopupOpen(true);
      }
    })
      .catch(err => {
        console.log(err);
        setIsSuccessful(false);
        setIsInfoTooltipPopupOpen(true);
      })
  }

  return (
    <section className="auth">
      <h1 className="auth__title" >Регистрация</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input className="auth__input auth__input_margin" onChange={handleChangeEmail} placeholder="Email" type="email"></input>
        <input className="auth__input auth__input_margin" onChange={handleChangePassword} placeholder="Пароль" type="password" minLength="5"></input>
        <button className="auth__submit-button" type='submit'>Зарегистрироваться</button>
      </form>
      <Link className="auth__link" to="/signin">Уже зарегистрированы? Войти</Link>
    </section>
  )
}
