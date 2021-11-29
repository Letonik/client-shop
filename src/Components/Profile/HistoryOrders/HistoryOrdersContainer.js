import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {checkReview, getHistoryOrders} from "../../../Selectors/orderSelector";
import {requestHistoryOrders} from "../../../Redux/orderReducer";
import HistoryOrders from "./HistoryOrders";
import WindowReview from "../../WindowReview/WindowReview";
import {getMessageSuccess} from "../../../Selectors/reviewSelector";
import {addNewReview, setSuccess} from "../../../Redux/reviewReducer";
import {requestUserInfo} from "../../../Redux/userReducer";
import {getUserInfo} from "../../../Selectors/userSelector";
import WindowSuccess from "../../WindowSuccess/WindowSuccess";

const HistoryOrdersContainer = (props) => {
    const [windowReview, showWindowReview] = useState(false);
    const [product, setProductId] = useState(0);
    const [modal, showModal] = useState(false);
    const handleCloseModal = () => {
        props.setSuccess('')
        showModal(false);
    }
    const handleCloseReview = () => showWindowReview(false);
    const handleShowReview = () => showWindowReview(true);
    useEffect(() => {
        props.requestHistoryOrders();
        props.requestUserInfo();
        if (props.messageSuccess)  {
            handleCloseReview();
            showModal(true);
        }
    }, [props.messageSuccess]);

    const addNewReview = (text) => {
        props.addNewReview(text, product, props.userInfo.name);
    }
    return (
        <>
            <WindowSuccess show={modal} message={props.messageSuccess} handleCloseModal={handleCloseModal}/>
            <HistoryOrders orders={props.ordersHistory} setProductId={setProductId}
                           handleShowReview={handleShowReview} checkReview={props.checkReview}/>
            <WindowReview handleCloseReview={handleCloseReview} windowReview={windowReview}
                          addNewReview={addNewReview} messageSuccess={props.messageSuccess}/>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        ordersHistory: getHistoryOrders(state),
        messageSuccess: getMessageSuccess(state),
        userInfo: getUserInfo(state),
        checkReview: checkReview(state)
    }
}
export default compose(
    connect(mapStateToProps, {requestHistoryOrders, addNewReview, requestUserInfo, setSuccess}),
)(HistoryOrdersContainer);