import React from "react";
import {Modal, Form, Button, Row, Col, Alert} from "react-bootstrap";
import * as yup from "yup";
import {FormikComponent, Textarea} from "../Formik/FormikComponent";

const WindowReview = ({windowReview, handleCloseReview, addNewReview}) => {
    const validationsSchema = yup.object().shape({
        text: yup.string().max(300, "Максимум 300 символов")
    })
    const val = {text:''};
    const createNewReview = (val) => {
        addNewReview(val.text)
    }

    return (
        <Modal show={windowReview} onHide={handleCloseReview}>
            <Modal.Header closeButton>
                <Modal.Title>Ваш отзыв:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={createNewReview}>
                    <Textarea name="text" />
                    <Button type={'submit'} variant={'warning'}>Отправить</Button>
                </FormikComponent>
            </Modal.Body>
        </Modal>
    )
}

export default WindowReview;