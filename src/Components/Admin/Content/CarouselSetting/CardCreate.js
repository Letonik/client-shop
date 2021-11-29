import React from 'react';
import {Button, Col} from "react-bootstrap";
import style from "../Content.module.scss";
import {FieldImages, FormikComponent, Input, Select, Textarea} from "../../../Formik/FormikComponent";
import * as yup from "yup";

const CardCreate = ({createCarousel, setShow}) => {
    const validationsSchema = yup.object().shape({
        title: yup.string().required('Выберите сектор'),
        text: yup.string().required('Выберите категорию'),
    })
    const val = {title: '', text: '', name: ''}

    const addCarousel = (val) => {
        setShow(false)
        createCarousel(val)
    }

    return (
        <Col md={5} className={style.cardGreen}>
            <h2>Создать элемент</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={addCarousel}>
                <Input name="title" type="text" label='Заголовок'/>
                <Textarea name="text" rows={3} label='Содержание'/>
                <FieldImages/>
                <Button type={'submit'} variant={'success'}>Создать элемент</Button>
            </FormikComponent>
        </Col>
    );
};

export default CardCreate;