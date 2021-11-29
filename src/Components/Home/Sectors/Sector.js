import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import style from "./Sector.module.scss"
import {NavLink} from "react-router-dom";
import {$url} from "../../../api/api";

const Sector = ({sectors}) => {
    return (
        <Container fluid className={style.cont}>
            <Row className={"d-flex justify-content-around"}>
                {
                    sectors.map(u =>
                        <Col key={u.id} lg={5} className={style.cols}>
                            <NavLink to={"/sector/" + u.id}>
                                <img className="d-block w-100" src={$url + u.image} alt="slider"/>
                                <p>{u.name.toUpperCase()}</p>
                            </NavLink>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Sector;