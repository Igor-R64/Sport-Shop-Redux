import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Navigation.css";

function Navigation({ count }) {

  return (

    <Nav id="nav" className="container-xxl d-flex justify-content-evenly">
      <NavItem >
        <Link className="nav-l" to='/'>Главная</Link>
      </NavItem >
      <NavItem >
        <Link className="nav-l" to='/products'>Товары</Link>
      </NavItem>
      <NavItem >
        <Link className="nav-l" to='/basket'> Корзина </Link><span className="badge bg-light text-dark rounded-pill">{count}</span>
      </NavItem>
      <NavItem >
        <Link className="nav-l" to='/contacts'>Контакты</Link>
      </NavItem>
    </Nav>
  );
}

Navigation.propTypes = {
  count: PropTypes.array
}

export default Navigation;
