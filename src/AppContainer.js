import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import App from "./App";
import {getInitialization} from "./Selectors/loadingSelector";
import {checkAuth} from "./Redux/userReducer";
import Spinner from "./Components/Spinner/Spinner";

const AppContainer = (props) => {
    useEffect(() => {
        props.checkAuth();
    }, [])

    if(props.initialization) {
        return <Spinner />
    }
    return (
        <App/>
    )
}

const mapStateToProps = (state) => {
    return {
        initialization: getInitialization(state)
    }
}
export default compose(
    connect(mapStateToProps, {checkAuth}),
)(AppContainer);