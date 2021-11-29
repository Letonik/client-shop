import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import style from './BasketProduct.module.scss'
import {$url} from "../../api/api";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import {NavLink} from "react-router-dom";
import {FormikComponent, Input} from "../Formik/FormikComponent";

const BasketProducts = ({productId, price, name, image, size, amount, maxCount, changeAmount, deleteProduct}) => {

    const [change, setChange] = useState(false)
    const addChange = (values) => {
        if (values.count != amount) {
            changeAmount(productId, values.count)
            setChange(false)
        } else {
            setChange(false)
        }
    }

    const validationsSchema = yup.object().shape({
        count: yup.number().min(1, "минимум 1").max(maxCount, "осталось " + maxCount),
    })
    const val = {count: amount};



    return (
        <Row className={'p-2 m-2 ' + style.row}>
            {
                !maxCount && <Col md={8} className={style.zero}>
                    Товар закончился
                </Col>
            }
            <Col xs={12} md={8}>
                <Row>
                    <Col xs={5} md={4}>
                        <NavLink to={"/product/" + productId}>
                            <img src={$url + image} className='w-100'/>
                        </NavLink>
                    </Col>
                    <Col xs={7} md={8}>
                        <h3>{name}</h3>
                        {size && <p>Размер: <b>{size}</b></p>}
                        <p>Цена: <b>{price} P</b></p>
                        <p>
                            {(!change) &&
                            <span>Количество: <b>{amount}</b><button className={'ml-1'}
                                                                     onClick={() => setChange(true)}>изменить</button></span>}
                            {change &&
                            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={addChange}>
                                <Row>
                                    <Col><Input name="count" type="number"/></Col>
                                    <Col><Button type={'submit'} variant={'success'}>Ok</Button></Col>
                                </Row>
                            </FormikComponent>}
                        </p>
                    </Col>
                </Row>
            </Col>
            <Col md={4} className="d-flex flex-column align-items-end">
                <h4>Общая цена</h4>
                <h3>{price * amount} P</h3>
                <p onClick={() => deleteProduct(productId)} className={style.delete}>убрать</p>
            </Col>
        </Row>
    );
};

export default BasketProducts;