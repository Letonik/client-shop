import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {logout, requestChangePassword, requestChangeUserInfo, requestUserInfo} from "../../../Redux/userReducer";
import ProfileSetting from "./ProfileSetting";
import {getUserToken, getUserInfo, getError, getMessageSuccessUser} from "../../../Selectors/userSelector";

const ProfileSettingContainer = (props) => {

    const [alert, showAlert] = useState(false);
    const [formPassword, showFormPassword] = useState(false)
    useEffect(() => {
        props.requestUserInfo();
    }, [])
    useEffect(() => {
        if(props.messageSuccess) {
            changePasswordSuccess()
        }
    }, [props.messageSuccess])
    const changePasswordSuccess = () => {
        showFormPassword(false)
        showAlert(true)
        setTimeout(() => {
            showAlert(false)
        }, 3000);
    }
    return (
            <ProfileSetting name={props.userInfo.name} address={props.userInfo.address}
                            phone={props.userInfo.phone} email={props.userTokenData.email}
                            changeInfo={props.requestChangeUserInfo} error={props.error}
                            formPassword={formPassword} showFormPassword={showFormPassword}
                            messageSuccess={props.messageSuccess} logout={props.logout}
                            changePassword={props.requestChangePassword} alert={alert}/>
    )
}

const mapStateToProps = (state) => {
    return {
        userTokenData: getUserToken(state),
        userInfo: getUserInfo(state),
        error: getError(state),
        messageSuccess: getMessageSuccessUser(state)
    }
}
export default compose(
    connect(mapStateToProps,
        {requestUserInfo, requestChangeUserInfo, requestChangePassword, logout}),
)(ProfileSettingContainer);