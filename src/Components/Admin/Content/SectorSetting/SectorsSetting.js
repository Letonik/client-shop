import React from 'react';
import {Container, Row} from "react-bootstrap";
import CardChange from "./CardChange";

const SectorsSetting = ({props}) => {

    return (
        <Container fluid>
            <Row className={'d-flex justify-content-around'}>
            <CardChange optionsSector={props.optionsSector} sectors={props.sectors}
                           changeSector={props.changeSector}/>
            </Row>
        </Container>
    );
};

export default SectorsSetting;