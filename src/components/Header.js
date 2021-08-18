import logo from '../images/logo.svg';

export function Header() {
  return (
    <header className="header root__container">
      <a className="header__logo-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">
        <img className="header__logo" src={logo} alt="Логотип" />
      </a>
    </header>
  )
}
