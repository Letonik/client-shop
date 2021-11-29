import React, {useEffect} from "react";
import {getSectors} from "../../Selectors/navigationSelector";
import {requestSectors} from "../../Redux/navigationReducer";
import {connect} from "react-redux";
import {loginUser, registrationUser, setMessageSuccessUser} from "../../Redux/userReducer";
import {getError, getIsAuth, getMessageSuccessUser, getUserToken} from "../../Selectors/userSelector";
import NaviBar from "./NaviBar";

const NaviBarContainer = (props) => {
    useEffect(() => {
        props.requestSectors();
    }, [])

    return (
        <NaviBar props={props} registration={props.registrationUser} login={props.loginUser}
                 setMessageSuccess={props.setMessageSuccessUser}/>
    )
}
const mapStateToProps = (state) => {
    return {
        sectors: getSectors(state),
        userToken: getUserToken(state),
        error: getError(state),
        isAuth: getIsAuth(state),
        messageSuccess: getMessageSuccessUser(state)
    }
}

export default connect(mapStateToProps,
    {requestSectors, registrationUser, loginUser, setMessageSuccessUser}
    )(NaviBarContainer);
