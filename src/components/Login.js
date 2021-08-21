import { React } from 'react';

 export function Login() {

  return (
    <section className="auth">
      <h1 className="auth__title" >Вход</h1>
      <form className="auth__form">
        <input className="auth__input" placeholder="Email" type="email"></input>
        <input className="auth__input" placeholder="Пароль" type="password" minLength="8"></input>
        <button className="auth__submit-button">Войти</button>
      </form>
    </section>
  )
}
