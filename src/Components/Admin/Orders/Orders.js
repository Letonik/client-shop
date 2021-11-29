import React from 'react';
import Current from "./Current";
import History from "./History";

const Orders = ({orders, deleteOrder, deleteProductOrders, confirmOrders, changeAmountProduct,
                    ordersHistory, setPageActive, pageNumber}) => {

    return (
        <div>
            <Current orders={orders} deleteOrder={deleteOrder} deleteProductOrders={deleteProductOrders}
                     confirmOrders={confirmOrders} changeAmountProduct={changeAmountProduct}/>
            <History ordersHistory={ordersHistory} setPageActive={setPageActive} pageNumber={pageNumber}/>
        </div>
    );
};

export default Orders;