import React, {useEffect, useState} from 'react';
import {Alert, Button, Card, Col, Container, Dropdown, ListGroup, NavDropdown, Row} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import style from "./RightPanel.module.scss";
import Product from "./Product";
import * as yup from "yup";
import {FormikComponent, Input, Select} from "../Formik/FormikComponent";
import {priceFormat} from "../HelpFunc/Price";

const RightPanel = ({
                        productId, sectorId, brand, name, price, sale, amount, size, info, image,
                        alert, messageAlert, addToBasket, isAuth
                    }) => {
    const [sizeOptions, setSizeOptions] = useState([]);
    useEffect(() => {
        if (size) {
            let options = [];
            for (let option of size) {
                options = [...options, {value: option.name, name: option.name}];
            }
            setSizeOptions(options);
        }
    }, [size])
    const validationsSchema = yup.object().shape({
        size: yup.string().required("выберите размер")
    });
    const val = {size: ''};

    const submitWithSize = (values) => {
        for (let c of size) {
            if (c.name == values.size) {
                addToBasket(productId, sectorId, name, sale, image[0].name, c.amount, values.size)
            }
        }
    }
    const submitNoSize = () => {
        addToBasket(productId, sectorId, name, sale, image[0].name, amount)
    }

    return (
        <Col lg={4} className={'py-4 ' + style.rightPanel}>
            <Row className={"d-flex flex-column"}>
                <Col>
                    <h1>{brand}</h1>
                    <p>{name}</p>
                    <hr/>
                </Col>
                <hr/>
                <Col>
                    {price == sale &&
                    <h2>{priceFormat(price)}</h2>}
                    {price != sale &&
                    <h2><span>{priceFormat(sale)} </span><s>{priceFormat(price)}</s></h2>}
                    <hr/>
                </Col>
                <hr/>
            </Row>
            <Row className={"d-flex justify-content-start"}>
                {isAuth && <Col>
                    {(sizeOptions.length != 0) &&
                    <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={submitWithSize}>
                        <Row className={"d-flex justify-content-start"}>
                            <Col xs={6} className={style.colSelect}>
                                <Select name='size' headSelect='Выбор размера:' options={sizeOptions}/>
                            </Col>
                            <Col xs={6}>
                                <Button type={'submit'}>В корзину</Button>
                            </Col>
                        </Row>
                    </FormikComponent>
                    }
                    {(sizeOptions.length === 0) &&
                    <Button
                        className={style.button}
                        onClick={submitNoSize}
                        type={'submit'}>В корзину
                    </Button>
                    }
                </Col>
                }
                {!isAuth && <Col>
                    <Alert variant={'warning'}>{'Зарегистрируйтесь, чтобы добавить товар в корзину!'}</Alert>
                </Col>}
            </Row>
            <Row>
                <Col>
                    <Alert show={alert} variant={'success'} className={"mx-0 my-3"}>{messageAlert}</Alert>
                </Col>
            </Row>
            <hr/>
            <Row className={"d-flex flex-column"}>
                <Col>
                    <h3>Описание</h3>
                    <ul style={{listStyle: 'none', paddingLeft: 0}}>
                        {info && info.map(i => <li key={i.id}><b>{i.title}: </b>{i.information}</li>)}
                    </ul>
                </Col>
            </Row>
        </Col>
    );
};

export default RightPanel;