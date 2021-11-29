import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from './Footer.module.scss';
import insta from '../Assets/Images/insta.png'
import vk from '../Assets/Images/vk.png'
import whatsapp from '../Assets/Images/whatsapp.png'

const Footer = () => {

    return (
        <Container fluid className={style.footer}>
            <Row>
                <Col sm={4} className={style.col}>
                    <a href="">
                        <img src={insta} alt=""/>
                    </a>
                </Col>
                <Col sm={4} className={style.col}>
                    <a href="">
                         <img src={whatsapp} alt=""/>
                    </a>
                </Col>
                <Col sm={4} className={style.col}>
                    <a href="">
                         <img src={vk} alt=""/>
                    </a>
                </Col>
            </Row>
            {/*<Container  className={"d-flex justify-content-center"}>

            </Container>*/}
        </Container>
    )
}

export default Footer;