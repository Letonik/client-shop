import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {$url} from "../../../api/api";
import style from "../Orders.module.scss";
import {priceFormat} from "../../HelpFunc/Price";
import EmptyElement from "../../EmptyElement/EmptyElement";

const ActiveOrders = ({orders}) => {

    return (
        <Container>
            {orders.length == 0 && <EmptyElement text={'Нет активных заказов...'}/>}
            {orders.map(order =>
                <Row className={'p-2 ' + style.row}>
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
                                                Количество: <b>{product.amount}</b>
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Row className={style.hr}>
                                    <hr/>
                                </Row>
                                <Col md={4} className="d-flex flex-column align-items-end">
                                    <h4>Общая цена</h4>
                                    <h3>{product.price * product.amount} P</h3>
                                </Col>
                            </Row>
                        )
                        }
                    </Col>
                </Row>
            )
            }
        </Container>

    );
};

export default ActiveOrders;