import React from 'react';
import {Alert, Modal} from "react-bootstrap";

const WindowSuccess = ({show, message, handleCloseModal}) => {
    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Body>
                <Alert variant={"success"}>{message}</Alert>
            </Modal.Body>
        </Modal>
    );
};

export default WindowSuccess;