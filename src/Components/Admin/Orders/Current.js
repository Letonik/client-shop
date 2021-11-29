import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import style from "../../Profile/Orders.module.scss";
import {NavLink} from "react-router-dom";
import {$url} from "../../../api/api";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import {priceFormat} from "../../HelpFunc/Price";
import {FormikComponent, Input} from "../../Formik/FormikComponent";

const Current = ({orders, deleteOrder, deleteProductOrders, confirmOrders, changeAmountProduct}) => {
    const [change, setChange] = useState(false);
    const changeAmount = (id, amount) => {
        changeAmountProduct(id, amount);
        setChange(false);
    }
    const validationsSchema = yup.object().shape({count: yup.number().min(1, "минимум 1")});
    const setAmount = (values) => {
        changeAmount(values.productId, values.count)
    }
    return (
        <Container>
            {orders.map(order =>
                <Row key={order.id} className={'p-2 ' + style.row}>
                    <Col md={4} className={'px-4 py-2 ' + style.infoGreen}>
                        <Row>
                            <p>Дата заказа: {order.createdAt}</p>
                        </Row>
                        <Row>
                            <p>Телефон: {order.phone}</p>
                        </Row>
                        <Row>
                            <p>Адрес доставки: {order.address}</p>
                        </Row>
                        <Row>
                            <p>Колличество товаров: {order.count}</p>
                        </Row>
                        <Row>
                            <p>Общая стоимость: {order.sum}</p>
                        </Row>
                    </Col>
                    <Col md={8}>
                        {order.products && order.products.map(product =>
                            <Row className={style.oneProduct} key={product.id}>
                                <Col md={8}>
                                    <Row>
                                        <Col xs={5} md={4}>
                                            <NavLink to={"/product/" + product.productId}>
                                                <img src={$url + product.image} className='w-100'/>
                                            </NavLink>
                                        </Col>
                                        <Col xs={7} md={8}>
                                            <h3>{product.name}</h3>
                                            {product.size && <p>Размер: <b>{product.size}</b></p>}
                                            <p>Цена: <b>{priceFormat(product.price)}</b></p>
                                            <p>
                                                {(!change) &&
                                                <span>Количество: <b>{product.amount}</b>
                                                    <button className={'ml-1'} onClick={() => setChange(true)}>
                                                        изменить
                                                    </button></span>}
                                                {change &&

                                                <FormikComponent validationsSchema={validationsSchema}
                                                                 val={{count: product.amount, productId: product.id}}
                                                                 funcSubmit={setAmount}>
                                                    <Row>
                                                        <Col><Input name="count" type="number"/></Col>
                                                        <Col><Button type={'submit'}>Ok</Button></Col>
                                                    </Row>
                                                </FormikComponent>}
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Row className={style.hr}>
                                    <hr/>
                                </Row>
                                <Col md={4} className="d-flex flex-column align-items-end">
                                    <Button className={style.btnRed}
                                            onClick={() => deleteProductOrders(product.productId, order.id)}>X
                                    </Button>
                                    <h4>Общая цена</h4>
                                    <h3>{priceFormat(product.price * product.amount)}</h3>
                                </Col>
                            </Row>
                        )
                        }
                        <Button onClick={() => confirmOrders(order.id, order.products)}>
                            Выполнено
                        </Button>
                        <Button onClick={() => deleteOrder(order.id)} className={style.btnRed}>
                            Отменить
                        </Button>
                    </Col>
                </Row>
            )
            }
        </Container>
    );
};

export default Current;