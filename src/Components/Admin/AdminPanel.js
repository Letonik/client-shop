import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import OrdersContainer from "./Orders/OrdersContainer";
import ContentContainer from "./Content/ContentContainer";
import StatisticContainer from "./Statistic/StatisticContainer";
import {compose} from "redux";
import HeadImg from "../NaviBar/HeadImg";
import NavLocal from "../NavLocal/NavLocal";


const AdminPanel = (props) => {
    const [page, setPage] = useState('orders')
    useEffect(() => {
        setPage(props.match.params.page);
    }, [props.match.params.page])
    return (
        <>
            <HeadImg/>
            <NavLocal props={[{name: 'Заказы', link: "/admin/orders"},
                {name: 'Товары', link: "/admin/products"},
                {name: 'Статистика', link: "/admin/statistic"}]}/>
            {(page === "orders") && <OrdersContainer/> }
            {(page === "products") && <ContentContainer/>}
            {(page === "statistic") && <StatisticContainer/>}
        </>
    );
};

export default compose(withRouter)(AdminPanel);