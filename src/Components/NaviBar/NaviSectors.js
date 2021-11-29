import React from 'react';
import {Carousel, Nav, NavDropdown} from "react-bootstrap";
import style from "./NaviBar.module.scss";
import {NavLink} from "react-router-dom";

const NaviSectors = ({sectors, setExp}) => {
    return (
        <>
            {
                sectors.map(s =>
                    <NavDropdown title={s.name} id="basic-nav-dropdown" className={style.dropdownMenu}
                                 style={{color:'white'}} activeClassName={style.activeLink} key={s.id}>
                        {
                            s.categories.map(c =>
                                <NavDropdown.Item key={c.id} className={style.dropdownItem}>
                                    {setExp &&
                                    <NavLink onClick={() => setExp(false)} to={"/categories/" + c.id}
                                             activeClassName={style.activeLink}>
                                        {c.name}
                                    </NavLink>
                                    }
                                    {!setExp &&
                                    <NavLink to={"/categories/" + c.id}
                                             activeClassName={style.activeLink}>
                                        {c.name}
                                    </NavLink>
                                    }

                                </NavDropdown.Item>
                            )
                        }
                    </NavDropdown>
                )
            }
        </>
    );
};

export default NaviSectors;