import { Route, Link, Switch } from "react-router-dom"

export function NavBar() {

  return (
    <nav>
      <Switch>
        <Route path="/signup">
          <Link className="header__auth-link" to="/signin">Войти</Link>
        </Route>
        <Route path="/signin">
          <Link className="header__auth-link" to="/signup">Регистрация</Link>
        </Route>
        <Route path="/">
          <div>
            <span className="header__user">User Email</span>
            <button className="header__auth-link header__auth-link_signout">Выйти</button>
          </div>
        </Route>
      </Switch>
    </nav>
  )
}
