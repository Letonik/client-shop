import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import style from './NavLocal.module.scss'

const NavLocal = ({props}) => {
    return (
        <Container fluid className={style.navLocal}>
            <Row>
                {
                    props.map(u =>
                        <Col md={4}>
                            <NavLink to={u.link} className={style.navItem} activeClassName={style.activeLink}>
                                <Row className={style.navItem} >{u.name}</Row>
                            </NavLink>
                        </Col>
                    )
                }
            </Row>
        </Container>

    );
};

export default NavLocal;