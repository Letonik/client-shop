import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import ProductPage from "./ProductPage";
import {requestProductWithCheck} from "../../Redux/productPageReducer";
import {getCheckMessage, getProduct} from "../../Selectors/productSelector";
import {addBasket, setMessageSuccess} from "../../Redux/basketReducer";
import {getIsAuth, getUserToken} from "../../Selectors/userSelector";
import {addNewReview, changeReview, setSuccess} from "../../Redux/reviewReducer";
import {getMessageSuccessBasket} from "../../Selectors/basketSelector";
import {getMessageSuccess} from "../../Selectors/reviewSelector";

const ProductPageContainer = (props) => {
    console.log(props)
    const [alertBasket, showAlertBasket] = useState(false);
    const [alertReview, showAlertReview] = useState(false);
    useEffect(() => {
        props.requestProductWithCheck(props.match.params.productId);
    }, [props.messageReview]);
    useEffect(() => {
        props.messageBasket && displayAlert(showAlertBasket, props.setMessageSuccess);
        props.messageReview && displayAlert(showAlertReview, props.setSuccess);
    }, [props.messageReview, props.messageBasket]);

    const displayAlert = (showAlert, setMessage) => {
        showAlert(true)
        setTimeout(() => {
            showAlert(false)
            setMessage('')
        }, 5000);
    }
    const addNewReview = (text) => {
        props.addNewReview(text, props.match.params.productId);
    }
    return (
        <>
            <ProductPage props={props} alertBasket={alertBasket} alertReview={alertReview} addToBasket={props.addBasket}
                         addNewReview={addNewReview} alert={alert} messageReview={props.messageReview}
                         messageBasket={props.messageBasket} isAuth={props.isAuth} checkMessage={props.checkMessage}
                         userTokenData={props.userTokenData} changeReview={props.changeReview}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        product: getProduct(state),
        checkMessage: getCheckMessage(state),
        isAuth: getIsAuth(state),
        messageReview: getMessageSuccess(state),
        messageBasket: getMessageSuccessBasket(state),
        userTokenData: getUserToken(state)
    }
}
export default compose(
    connect(mapStateToProps,
        {requestProductWithCheck, addBasket, addNewReview, setSuccess, setMessageSuccess, changeReview}),
    withRouter
)(ProductPageContainer);

