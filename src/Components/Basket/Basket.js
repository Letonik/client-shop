import React from 'react';
import {Alert, Col, Container, Row} from "react-bootstrap";
import BasketProducts from "./BasketProducts";
import RightPanel from "./RightPanel";
import style from './Basket.module.scss';

const Basket = ({props, changeAmount, deleteProduct, handleShowOrder}) => {

    return (
        <div>
            <Container>
                <Row md={10} className={style.basket}>
                    <Col md={7}>
                        {
                            props.basket.map(u =>
                                <BasketProducts key={u.id} productId={u.productId} price={u.price} name={u.name}
                                                size={u.size} amount={u.amount} image={u.image} maxCount={u.maxCount}
                                                changeAmount={changeAmount} deleteProduct={deleteProduct}/>
                            )
                        }
                    </Col>
                    <RightPanel price={props.price} count={props.count} handleShowOrder={handleShowOrder}/>
                </Row>
            </Container>
        </div>
    );
};

export default Basket;