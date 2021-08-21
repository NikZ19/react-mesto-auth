import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { NavBar } from './NavBar';

export function Header() {
  return (
    <header className="header root__container">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <NavBar />
    </header>
  )
}
