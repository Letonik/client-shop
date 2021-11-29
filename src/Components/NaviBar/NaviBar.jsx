import React, {useEffect, useState} from "react";
import style from "./NaviBar.module.scss";
import HeaderPC from "./HeaderPC";
import HeaderPhone from "./HeaderPhone";
import Registration from "../WindowsAuth/Registration";
import Login from "../WindowsAuth/Login";
import WindowSuccess from "../WindowSuccess/WindowSuccess";

const NaviBar = ({props, login, registration, setMessageSuccess}) => {
    const [showRegistration, setShowRegistration] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [bgHeader, setBgHeader] = useState(null);

    const handleCloseRegistration = () => setShowRegistration(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowRegistration = () => setShowRegistration(true);
    const handleShowLogin = () => setShowLogin(true);

    useEffect(() => {
        if (props.messageSuccess) {
            showLogin && handleCloseLogin();
            showRegistration && handleCloseRegistration();
            setShowSuccess(true);
        }
    }, [props.messageSuccess]);
    const handleCloseSuccess = () => {
        setShowSuccess(false);
        setMessageSuccess('');
    }

    const setBgHeaderOrDel = () => {
        if (window.pageYOffset > 100) {
            setBgHeader(style.bgHeader);
        } else {
            setBgHeader(null);
        }
    }
    window.addEventListener('scroll', setBgHeaderOrDel);

    return (
        <>
            <HeaderPC bgHeader={bgHeader} props={props} handleShowLogin={handleShowLogin}
                      handleShowRegistration={handleShowRegistration}/>
            <HeaderPhone props={props} handleShowLogin={handleShowLogin}
                      handleShowRegistration={handleShowRegistration}/>
            <Registration handleClose={handleCloseRegistration} show={showRegistration}
                          registration={registration} error={props.error}/>
            <Login handleClose={handleCloseLogin} show={showLogin} login={login}
                   error={props.error}/>
            <WindowSuccess show={showSuccess} message={props.messageSuccess}
                           handleCloseModal={handleCloseSuccess} />
        </>

    )
}

export default NaviBar;