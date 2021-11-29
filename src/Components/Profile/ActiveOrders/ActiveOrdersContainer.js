import React, {useEffect} from 'react';
import ActiveOrders from "./ActiveOrders";
import {compose} from "redux";
import {connect} from "react-redux";
import {getActiveOrders} from "../../../Selectors/orderSelector";
import {requestActiveOrders} from "../../../Redux/orderReducer";

const ActiveOrdersContainer = (props) => {
    useEffect(() => {
        props.requestActiveOrders();
    }, [])
    return (
        <ActiveOrders orders={props.orders}/>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: getActiveOrders(state)
    }
}
export default compose(
    connect(mapStateToProps, {requestActiveOrders}),
)(ActiveOrdersContainer);