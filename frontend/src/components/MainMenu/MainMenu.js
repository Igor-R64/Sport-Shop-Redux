import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import './MainMenu.css';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <Navbar className="d-flex header container-xxl" light expand="md">
      <div className="d-flex container-fluid">
        <NavbarBrand className="text-success" href="/">
          <img className="logo" src={"/images/log1.png"} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText id="nav-header3" className="offset-md-1">
            <p>Мы всегда должны выходить за пределы</p> 
            <p>© Арнольд Шварценеггер</p>
          </NavbarText>
          <Nav className="mr-auto offset-md-2 " navbar>
            <NavItem>
              <NavLink id="nav-header1" href="#">Войти</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav-header2" href="#">Зарегистрироватся</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}


export default MainMenu;