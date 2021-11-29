import React, {useState} from 'react';
import {Container, Row} from "react-bootstrap";
import CardChange from "./CardChange";
import CardCreate from "./CardCreate";


const CarouselSetting = ({props}) => {
    const [show, setShow] = useState(true)
    return (
        <Container fluid>
            <Row className={'d-flex justify-content-around'}>
                <CardChange carousel={props.carousel} deleteCarousel={props.deleteCarousel} show={show}
                            setShow={setShow} changeCarousel={props.changeCarousel}/>
                <CardCreate createCarousel={props.createCarousel} setShow={setShow}/>
            </Row>
        </Container>
    );
};

export default CarouselSetting;