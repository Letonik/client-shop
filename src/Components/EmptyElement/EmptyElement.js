import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from "./EmptyElement.module.scss";

const EmptyElement = ({text}) => {
    return (
        <Container>
            <Row className={'d-flex justify-content-center'}>
                <Col className={styles.empty} md={6}>
                    <div>{text}</div>
                </Col>
            </Row>
        </Container>
    );
};

export default EmptyElement;