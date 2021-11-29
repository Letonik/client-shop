import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import elena from '../../Assets/Images/elena.jpg'
import svetlana from '../../Assets/Images/svetlana.jpg'
import style from './About.module.scss'
import HeadImg from "../NaviBar/HeadImg";
import insta from '../../Assets/Images/insta.png'
import vk from '../../Assets/Images/vk.png'
import whatsapp from '../../Assets/Images/whatsapp.png'

const About = () => {

    return (
        <>
        <HeadImg/>
        <Container className={style.contacts}>
            <Row className={'p-4 ' + style.row}>
                <Col sm={4}>
                    <img src={elena} alt=""/>
                </Col>
                <Col sm={8}>
                    <h1>Елена</h1>
                    <h3>Телефон: +7 (953) 787-79-78</h3>
                    <div className={style.socialNet}>
                        <div className={style.insta}>
                            <img src={insta} alt=""/>
                        </div>
                        <div className={style.whatsapp}>
                            <img src={whatsapp} alt=""/>
                        </div>
                        <div className={style.vk}>
                            <img src={vk} alt=""/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={'p-4 ' + style.row}>
                <Col sm={4}>
                    <img src={svetlana} alt=""/>
                </Col>
                <Col sm={8}>
                    <h1>Светлана</h1>
                    <h3>Телефон: +7 (952) 227-22-31</h3>
                    <div className={style.socialNet}>
                        <div className={style.insta}>
                            <img src={insta} alt=""/>
                        </div>
                        <div className={style.whatsapp}>
                            <img src={whatsapp} alt=""/>
                        </div>
                        <div className={style.vk}>
                            <img src={vk} alt=""/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
            </>
    )
}


export default About;