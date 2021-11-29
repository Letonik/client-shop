import React from 'react';
import Product from "./Product";
import Reviews from "./Reviews";
import {Container} from "react-bootstrap";
import HeadImg from "../NaviBar/HeadImg";

const ProductPage = ({
                         props, alertReview, alertBasket, messageBasket, messageReview, addToBasket,
                         addNewReview, isAuth, checkMessage, userTokenData, changeReview
                     }) => {
    return (
        <>
            <HeadImg/>
            <Container>
                <Product product={props.product} alert={alertBasket} messageAlert={messageBasket}
                         addToBasket={addToBasket} isAuth={isAuth}/>
                <Reviews reviews={props.product.reviews} addNewReview={addNewReview} alert={alertReview}
                         messageAlert={messageReview} isAuth={isAuth} checkMessage={checkMessage}
                         userTokenData={userTokenData} changeReview={changeReview}/>
            </Container>
        </>
    );
};

export default ProductPage;