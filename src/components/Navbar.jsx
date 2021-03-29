import React from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavDropdown, to} from 'react-bootstrap';

const NavbarMenu = () =>{
  return(
    <React.Fragment>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">

                {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand" to="/">Lindos</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav> */}

                <Navbar collapseOnSelect expand="lg" text="dark">
                    <Navbar.Brand href="#home">Lindos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link exact activeClassName="menu_active" className="nav-link" to="/">Home</Nav.Link>
                                <Nav.Link exact activeClassName="menu_active" className="nav-link" to="/about">About</Nav.Link>
                                <Nav.Link exact activeClassName="menu_active" className="nav-link" to="/service">Services</Nav.Link>
                                <Nav.Link exact activeClassName="menu_active" className="nav-link" to="contact">Contact</Nav.Link>
                                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </div>
        </div>
    </div>

    </React.Fragment>
  );
};

export default NavbarMenu;