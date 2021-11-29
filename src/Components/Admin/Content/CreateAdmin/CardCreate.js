import React from 'react';
import * as yup from "yup";
import {Button, Col, Form} from "react-bootstrap";
import style from "../Content.module.scss";
import {FieldImages, FormikComponent, Input, Select} from "../../../Formik/FormikComponent";

const CardCreate = ({error, createNewAdmin}) => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().min(8, "мин 8 сим").max(20, "max 20").typeError('Должно быть строкой').required('Обязательное поле'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
        email: yup.string().email('Введите верный email').required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле')
    })
    const val = {name: '', password: '', confirmPassword: '', email: '', phone: ''}

    return (
        <Col md={5} className={style.cardGreen}>
            <h2>Создать админа</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={createNewAdmin}>
                <Input name="name" type="text" label='Имя админа'/>
                <Input name="password" type="password" label='Пароль'/>
                <Input name="confirmPassword" type="password" label='Подтвердите пароль'/>
                <Input name="email" type="email" label='Email'/>
                <Input name="phone" type="text" label='Телефон'/>
                {error && <p>{error}</p>}
                <Button type={'submit'} variant={'success'}>Создать админа</Button>
            </FormikComponent>
        </Col>
    );
};


export default CardCreate;