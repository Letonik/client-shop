import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import style from './RightPanel.module.scss'

const RightPanel = ({count, price, handleShowOrder}) => {

    return (
        <Col md={4} className={'p-2 mx-auto ' + style.rightPanel}>
            <Row className={'m-2 ' + style.table}>
               <Col>
                  <h3>Ваша корзина</h3>
                  <p>Всего товаров: {count}</p>
                  <p>Общая сумма: {price} P</p>
               </Col>
            </Row>
            <Row className='p-2'>
                <Col>
                    <Button onClick={handleShowOrder}>Оформить заказ</Button>
                </Col>
            </Row>
            <Row className='p-2'>
                <Col>
                    <h4 className={style.delivery}>Доставка в день заказа</h4>
                </Col>
            </Row>
            <Row className='p-2'>
                <Col>
                    <h4>Наши контакты:</h4>
                    <p>8(908)-445-34-34</p>
                    <p>8(908)-445-34-34</p>
                </Col>
            </Row>
        </Col>
    );
};

export default RightPanel;