import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import RightPanel from "./RightPanel";
import Image from "./Image";
import style from './Description.module.scss';

const Product = ({product, alert, messageAlert, addToBasket, isAuth}) => {
    return (
        <>
            <Row >
                <Image images={product.images} description={product.description} />
                <RightPanel productId={product.id} sectorId={product.sectorId} name={product.name}
                            price={product.price} brand={product.brand} size={product.size}
                            sale={product.sale} info={product.info} image={product.images}
                            amount={product.amount} alert={alert} messageAlert={messageAlert}
                            addToBasket={addToBasket} isAuth={isAuth}/>
            </Row>
            <Row>
                <Col lg={8} className={style.description}>
                    <Card body className='mt-0 '>{product.description}</Card>
                </Col>
            </Row>
        </>
    );
};

export default Product;