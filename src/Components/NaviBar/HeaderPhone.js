import React, {useState} from 'react';
import {Button, Col, Nav, Navbar, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../Assets/Images/Logo.png";
import style from "./NaviBar.module.scss";
import NaviSectors from "./NaviSectors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faPowerOff, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderPhone = ({props, handleShowLogin, handleShowRegistration}) => {
    const [exp, setExp] = useState(false)
    const expForToggle = () => {
        setExp(exp ? false : true);
    }

    return (
        <>
            <Navbar expand={"lg"} expanded={exp} className={style.headerPhone + ' ' + style.bgHeader}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={expForToggle}/>
                <Navbar.Collapse id={"responsive-navbar-nav"}>
                    <Nav className={"mr-auto"}>
                        <Nav.Link>
                            <NavLink onClick={() => setExp(false)} to="/home"
                                     activeClassName={style.activeLink}>
                                Главная
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink onClick={() => setExp(false)} to="/about"
                                     activeClassName={style.activeLink}>
                                О нас
                            </NavLink>
                        </Nav.Link>
                        <NaviSectors sectors={props.sectors} setExp={setExp}/>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">
                    <NavLink onClick={() => setExp(false)} to="/home">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/>
                    </NavLink>
                </Navbar.Brand>
                {!props.isAuth &&
                <Nav>
                    <div className='d-flex'>
                        <FontAwesomeIcon className={'mx-2 ' + style.enter}
                            icon={faPowerOff} onClick={handleShowLogin}/>
                        <FontAwesomeIcon className={'mx-2 ' + style.enter}
                            icon={faPlusSquare} onClick={handleShowRegistration}/>
                    </div>
                </Nav>
                }
                {props.isAuth &&
                <Nav >
                    <Row className={'d-flex'}>
                        <Col className={'px-2'}>
                            <Nav.Link>
                                <NavLink onClick={() => setExp(false)} to="/basket"
                                         activeClassName={style.activeLink}>
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                </NavLink>
                            </Nav.Link>
                        </Col>
                        <Col className={'px-2'}>
                            <Nav.Link>
                                <NavLink  onClick={() => setExp(false)} to={"/profile/active"}
                                          activeClassName={style.activeLink}>
                                    <FontAwesomeIcon icon={faUser} />
                                </NavLink>
                            </Nav.Link>
                        </Col>
                        {(props.userToken.role === "ADMIN") &&
                            <Col className={'px-2'}>
                        <Nav.Link>
                            <NavLink onClick={() => setExp(false)} to={"/admin/orders"}
                                     activeClassName={style.activeLink}>
                                <FontAwesomeIcon icon={faUnlockAlt} />
                            </NavLink>
                        </Nav.Link>
                                </Col>}
                    </Row>
                </Nav>
                }
            </Navbar>
        </>
    );
};

export default HeaderPhone;