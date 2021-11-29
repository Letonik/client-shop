import React from "react";
import {Modal, Form, Button, Row, Col} from "react-bootstrap";
import * as yup from "yup";
import {FormikComponent, Input} from "../Formik/FormikComponent";
/*import style from './Auth.module.scss'*/

const ConfirmOrder = ({windowOrder, handleCloseOrder, name, phone, address, count, price, addNewOrders}) => {
    const validationsSchema = yup.object().shape({
        phone: yup.string().required('Обязательное поле'),
        address: yup.string().required('Обязательное поле')
    })
    const val = {phone: phone, address: address};

    const submit = (values) => {
        addNewOrders(values.address, name, values.phone)
    }

    return (
        <Modal show={windowOrder} onHide={handleCloseOrder}>
            <Modal.Header closeButton>
                <Modal.Title>Оформление заказа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className={"my-3"}><Col>Имя: {name}</Col></Row>
                <Row className={"my-3"}>
                    <Col md={6}>Товаров: {count}</Col>
                    <Col md={6}>Сумма: {price} Р</Col>
                </Row>
                <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={submit}>
                    <Input name="phone" type="text" label='Телефон'/>
                    <Input name="address" type="text" label='Адрес'/>
                    <Button type={'submit'} variant={'warning'}>Офромить</Button>
                </FormikComponent>
            </Modal.Body>
        </Modal>
    )
}

export default ConfirmOrder;