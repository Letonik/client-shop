import React from "react";
import {Modal, Form, Button, Col} from "react-bootstrap";
import * as yup from "yup";
import {Formik} from "formik";
import style from './Auth.module.scss'
import {FormikComponent, Input, Textarea} from "../Formik/FormikComponent";

const Registration = ({show, handleClose, registration, error}) => {

    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().min(8, "мин 8 сим").max(20, "max 20").typeError('Должно быть строкой').required('Обязательное поле'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
        email: yup.string().email('Введите верный email').required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле')
    })

    const reg = ({confirmPassword, ...values}) => {
        registration(values)
    }

    const val = {name: '', password: '', confirmPassword: '', email: '', phone: ''}

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className={style.title}>Регистрация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={reg}>
                    <Input name="name" type="text" label='Имя'/>
                    <Input name="password" type="password" label='Пароль'/>
                    <Input name="confirmPassword" type="password" label='Подтвердите пароль'/>
                    <Input name="email" type="email" label='Email'/>
                    {error && <p>{error}</p>}
                    <Input name="phone" type="text" label='Телефон'/>
                    <Textarea name="address" rows={3} label='Адрес'/>
                    <Button type={'submit'} variant={'success'}>Зарегистрироваться</Button>
                </FormikComponent>
            </Modal.Body>
        </Modal>
    )
}

export default Registration;
