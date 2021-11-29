import React from 'react';
import {Button, Col} from "react-bootstrap";
import style from "../Content.module.scss";
import {FieldImages, FormikComponent, Input, Select} from "../../../Formik/FormikComponent";
import * as yup from "yup";

const CardCreate = ({optionsSector, createCategory}) => {
    const validationsSchema = yup.object().shape({
        sectorId: yup.string().required('Выберите сектор'),
        name: yup.string().required('Ведите название'),
        files: yup.mixed().required('Выберите изображение')
    })
    const val = {sector: '', category: '', name: ''}

    return (
        <Col md={5} className={style.cardGreen}>
            <h2>Создать категорию</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={createCategory}>
                <Select name='sectorId' label='Сектор' headSelect='Выберите сектор' options={optionsSector}/>
                <Input name="name" type="text" label='Название категории'/>
                <FieldImages/>
                <Button type={'submit'} variant={'success'}>Создать категорию</Button>
            </FormikComponent>
        </Col>
    );
};

export default CardCreate;