import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { logoutActionCreator } from './../../store/modules/auth/login.action';
import { FaRegStar } from 'react-icons/fa';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Header = (props) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const logout = () => {
        dispatch(logoutActionCreator());
        props.history.push('/login')
      }
    return (
      <div className="mb-4">
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/dashboard/welcome"><FaRegStar />Desafio-React</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Opciones
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavItem>
                  <NavLink tag={RRNavLink} exact to="/dashboard/createproduct" activeClassName="active">Nuevo Producto</NavLink>
                  </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                  <NavItem>
                  <NavLink tag={RRNavLink} exact to="/dashboard/product" activeClassName="active">Listado de Productos</NavLink>
                  </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={logout}>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default Header;