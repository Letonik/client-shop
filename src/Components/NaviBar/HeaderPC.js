import React from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../Assets/Images/Logo.png";
import style from "./NaviBar.module.scss";
import NaviSectors from "./NaviSectors";


const HeaderPC = ({props, handleShowLogin, bgHeader, handleShowRegistration}) => {
    return (
        <>
            <Navbar expand={"lg"} className={style.headerPC + " fixed-top " + bgHeader}>
                <Navbar.Brand href="#home">
                    <NavLink to="/home">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id={"responsive-navbar-nav"}>
                    <Nav className={"mr-auto"}>
                        <Nav.Link>
                            <NavLink to="/home" activeClassName={style.activeLink}>Главная</NavLink>
                        </Nav.Link>
                        <NaviSectors sectors={props.sectors}/>
                        <Nav.Link>
                            <NavLink to="/about" activeClassName={style.activeLink}>О нас</NavLink>
                        </Nav.Link>
                    </Nav>
                    {!props.isAuth &&
                    <Nav>
                        <Button className={"m-1 " + style.headerButton} onClick={handleShowLogin}
                                activeClassName={style.activeButton}
                        >
                            Вход
                        </Button>
                        <Button className={"m-1 " + style.headerButton} onClick={handleShowRegistration}>Регистрация</Button>
                    </Nav>
                    }
                    {props.isAuth &&
                    <Nav>
                        <Nav.Link>
                            <NavLink to="/basket" activeClassName={style.activeLink}>Корзина</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={"/profile/active"} activeClassName={style.activeLink}>Профиль</NavLink>
                        </Nav.Link>
                        {props.userToken && (props.userToken.role === "ADMIN") &&
                        <Nav.Link>
                            <NavLink to={"/admin/orders"} activeClassName={style.activeLink}>Админ</NavLink>
                        </Nav.Link>}
                    </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderPC;