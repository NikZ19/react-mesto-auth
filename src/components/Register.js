import { React } from 'react';
import { Link } from 'react-router-dom';

export function Register() {

  return (
    <section className="auth">
      <h1 className="auth__title" >Регистрация</h1>
      <form className="auth__form">
        <input className="auth__input" placeholder="Email" type="email"></input>
        <input className="auth__input" placeholder="Пароль" type="password" minLength="8"></input>
        <button className="auth__submit-button">Зарегистрироваться</button>
      </form>
      <Link className="auth__link" to="/signin">Уже зарегистрированы? Войти</Link>
    </section>
  )
}
