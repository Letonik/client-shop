import React, {useState} from 'react';
import * as yup from "yup";
import {Button, Col} from "react-bootstrap";
import style from "../Content.module.scss";
import {FormikComponent, Select} from "../../../Formik/FormikComponent";

const CardDelete = ({deleteProduct, optionsSector, optionsCategory, optionsProducts, requestCategories, requestProducts}) => {
    const validationsSchema = yup.object().shape({
        sector: yup.string().required('Выберите сектор'),
        category: yup.string().required('Выберите категорию'),
        product: yup.string().required('Выберите продукт'),
    })
    const selectSector = (val) => {
        requestCategories(val)
    }
    const selectCategory = (val) => {
        requestProducts(val)
    }
    const destroyProduct = (values) => {
        deleteProduct(values.product)
    }
    const val = {sector:'', category:'', product:''}
    return (
        <Col md={5} className={style.cardRed}>
            <h2>Удалить продукт</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={destroyProduct}>
                <Select name='sector' label='Сектор' headSelect='Выберите сектор' options={optionsSector}
                        fnForChange={selectSector}/>
                <Select name='category' label='Категория' headSelect='Выберите категорию' options={optionsCategory}
                        fnForChange={selectCategory}/>
                <Select name='product' label='Продукт' headSelect='Выберите продукт' options={optionsProducts}/>
                <Button type={'submit'} variant={'danger'}>Удалить продукт</Button>
            </FormikComponent>
        </Col>
    );
};

export default CardDelete;