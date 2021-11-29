export const getOrderSuccess = (state) => {
    return state.orderPage.messageSuccess;
}
export const getActiveOrders = (state) => {
    return state.orderPage.orders;
}
export const getHistoryOrders = (state) => {
    return state.orderPage.ordersHistory;
}
export const getHistoryOrdersAdmin = (state) => {
    return state.orderPage.ordersHistoryAdmin;
}
export const getActiveOrdersAdmin = (state) => {
    return state.orderPage.ordersAdmin;
}
export const checkReview = (state) => {
    return state.orderPage.checkReview;
}