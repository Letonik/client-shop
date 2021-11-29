import React, {useEffect, useState} from 'react';
import {getActiveOrdersAdmin, getHistoryOrdersAdmin} from "../../../Selectors/orderSelector";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    changeAmountProductAdmin,
    confirmOrders,
    deleteOrder,
    deleteProductOrders,
    requestActiveOrdersAdmin, requestHistoryOrdersAdmin,
} from "../../../Redux/orderReducer";
import Orders from "./Orders";

const OrdersContainer = (props) => {
    let [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        props.requestActiveOrdersAdmin();
        props.requestHistoryOrdersAdmin(`?page=1`);
    }, [])
    const setPageActive = (page) => {
        setPageNumber(page)
        props.requestHistoryOrdersAdmin (`?page=${page}`);
    }

    return (
        <Orders orders={props.ordersAdmin} deleteOrder={props.deleteOrder}
                deleteProductOrders={props.deleteProductOrders}
                confirmOrders={props.confirmOrders} ordersHistory={props.ordersHistoryAdmin}
                changeAmountProduct={ props.changeAmountProductAdmin}
                setPageActive={setPageActive} pageNumber={pageNumber}/>
    )
}

const mapStateToProps = (state) => {
    return {
        ordersAdmin: getActiveOrdersAdmin(state),
        ordersHistoryAdmin: getHistoryOrdersAdmin(state)
    }
}
export default compose(
    connect(mapStateToProps,
        {requestActiveOrdersAdmin, deleteProductOrders, deleteOrder,
            confirmOrders, changeAmountProductAdmin, requestHistoryOrdersAdmin}),
)(OrdersContainer);

