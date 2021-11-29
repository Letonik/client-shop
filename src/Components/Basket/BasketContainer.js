import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getBasket, getCount, getPrice} from "../../Selectors/basketSelector";
import {changeAmountBasket, deleteProduct, requestBasket} from "../../Redux/basketReducer";
import Basket from "./Basket";
import {getUserInfo} from "../../Selectors/userSelector";
import {requestUserInfo} from "../../Redux/userReducer";
import ConfirmOrder from "../WindowOrder/ConfirmOrder";
import {addNewOrder, setSuccess} from "../../Redux/orderReducer";
import {getOrderSuccess} from "../../Selectors/orderSelector";
import HeadImg from "../NaviBar/HeadImg";
import WindowSuccess from "../WindowSuccess/WindowSuccess";
import EmptyElement from "../EmptyElement/EmptyElement";

const BasketContainer = (props) => {
    const [modal, showModal] = useState(false)
    const [windowOrder, showWindowOrder] = useState(false);
    const handleCloseModal = () => {
        props.setSuccess('')
        showModal(false);
    }
    const handleCloseOrder = () => showWindowOrder(false);
    const handleShowOrder = () => showWindowOrder(true);
    useEffect(() => {
        props.requestBasket();
        props.requestUserInfo();
    }, [])
    useEffect(() => {
        props.messageSuccess && showModal(true)
    }, [props.messageSuccess])

    const addNewOrders = (address, name, phone) => {
        props.addNewOrder(address, name, phone, props.basket, props.price, props.count)
        showWindowOrder(false)
    }
    return (
        <>
            <HeadImg/>
            <WindowSuccess show={modal} message={props.messageSuccess} handleCloseModal={handleCloseModal}/>
            {(props.count != 0) && <>
                <Basket props={props} changeAmount={ props.changeAmountBasket} deleteProduct={props.deleteProduct}
                        handleShowOrder={handleShowOrder}/>
                <ConfirmOrder handleCloseOrder={handleCloseOrder} windowOrder={windowOrder} count={props.count}
                              price={props.price} phone={props.userData.phone} name={props.userData.name}
                              address={props.userData.address} addNewOrders={addNewOrders}/>
            </>}
            {!props.count && <EmptyElement text={'Ваша корзина пуста...'}/>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        basket: getBasket(state),
        count: getCount(state),
        price: getPrice(state),
        userData: getUserInfo(state),
        messageSuccess: getOrderSuccess(state)
    }
}
export default compose(
    connect(mapStateToProps,
        {requestBasket, changeAmountBasket, deleteProduct, requestUserInfo, addNewOrder, setSuccess}),
)(BasketContainer);
