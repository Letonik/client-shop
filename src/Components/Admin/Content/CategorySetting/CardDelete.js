import React, {useState} from 'react';
import * as yup from "yup";
import {Button, Col} from "react-bootstrap";
import style from "../Content.module.scss";
import {FormikComponent, Select} from "../../../Formik/FormikComponent";

const CardDelete = ({deleteCategory, optionsSector, optionsCategory, requestCategories}) => {
    const validationsSchema = yup.object().shape({
        sector: yup.string().required('Выберите сектор'),
        category: yup.string().required('Выберите категорию'),
    })
    const selectSector = (val) => {
        requestCategories(val)
    }
    const destroyCategory = (values) => {
        deleteCategory(values.category)
    }
    const val = {sector: '', category: ''}
    return (
        <Col md={5} className={style.cardRed}>
            <h2>Удалить категорию</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={destroyCategory}>
                <Select name='sector' label='Сектор' headSelect='Выберите сектор' options={optionsSector}
                        fnForChange={selectSector}/>
                <Select name='category' label='Категория' headSelect='Выберите категорию'
                        options={optionsCategory}/>
                <Button type={'submit'} variant={'danger'}>Удалить категорию</Button>
            </FormikComponent>
        </Col>
    );
};

export default CardDelete;