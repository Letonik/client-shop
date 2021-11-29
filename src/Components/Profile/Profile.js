import React, {useEffect, useState} from 'react';
import {useHistory, withRouter} from "react-router-dom";
import NavLocal from "../NavLocal/NavLocal";
import HistoryOrdersContainer from "./HistoryOrders/HistoryOrdersContainer";
import ProfileSettingContainer from "./ProfileSetting/ProfileSettingContainer";
import ActiveOrdersContainer from "./ActiveOrders/ActiveOrdersContainer";
import {compose} from "redux";
import HeadImg from "../NaviBar/HeadImg";


const Profile = (props) => {
    const [page, setPage] = useState('active')
    useEffect(() => {
        setPage(props.match.params.page);
    }, [props.match.params.page])
    return (
        <>
            <HeadImg/>
            <NavLocal props={[{name: 'Активные заказы', link: '/profile/active'},
                {name: 'История Заказов', link: '/profile/history'},
                {name: 'Настройка профиля', link: '/profile/settings'}]}/>
            {(page === "active") && <ActiveOrdersContainer/> }
            {(page === "history") && <HistoryOrdersContainer/>}
            {(page === "settings") && <ProfileSettingContainer/>}
        </>
    )
}
export default compose(withRouter)(Profile);
