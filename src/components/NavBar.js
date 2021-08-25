import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom"

export function NavBar(props) {

  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem('jwt');
    history.push('/signin');
    props.setLoggedIn(false);
  };

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const burgerClick = () => {
    if (!menuIsOpen) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  }

  return (
    <nav className="menu">
      <Switch>
        <Route path="/signup">
          <Link className="menu__auth-link" to="/signin">Войти</Link>
        </Route>
        <Route path="/signin">
          <Link className="menu__auth-link" to="/signup">Регистрация</Link>
        </Route>
        <Route path="/">
          <div className={`menu__main ${menuIsOpen ? "menu__main_visible" : ""}`}>
            <span className="menu__user">{props.userData}</span>
            <button className="menu__auth-link menu__auth-link_signout" onClick={signOut}>Выйти</button>
          </div>
          <button className={`menu__burger-button ${menuIsOpen ? "menu__burger-button_active" : ""}`} onClick={burgerClick} type="button"></button>
        </Route>
      </Switch>
    </nav>
  )
}
