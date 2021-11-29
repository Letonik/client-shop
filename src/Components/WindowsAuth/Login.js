import React from "react";
import {Modal, Form, Button} from "react-bootstrap";
import * as yup from "yup";
import {Formik} from "formik";
import style from './Auth.module.scss'
import {FormikComponent, Input, Textarea} from "../Formik/FormikComponent";

const Login = ({show, handleClose, login, error}) => {

    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Обязательное поле'),
        password: yup.string().min(8, "мин 8 сим").max(20, "max 20").typeError('Должно быть строкой').required('Обязательное поле'),
    })

    const val = {password: '', email: ''}

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className={style.title}>Вход</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={login}>
                    <Input name="email" type="email" label='Email'/>
                    <Input name="password" type="password" label='Пароль'/>
                    {error && <p>{error}</p>}
                    <Button type={'submit'} variant={'success'}>Вход</Button>
                </FormikComponent>
            </Modal.Body>
        </Modal>
    )
}

export default Login;