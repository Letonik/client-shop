import React from 'react';
import {Container, Row} from "react-bootstrap";
import CardCreate from "./CardCreate";

const CreateAdmin = ({props}) => {
    return (
        <Container fluid>
            <Row className={'d-flex justify-content-around'}>
                <CardCreate error={props.error} createNewAdmin={props.createNewAdmin}/>
            </Row>
        </Container>
    );
};

export default CreateAdmin;