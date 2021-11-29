import React from 'react';
import style from "./NaviBar.module.scss";

const HeadImg = () => {
    return (
        <>
            <img style={{width: "100%"}} src='/headerImg.png' alt="head" className={style.headerPC}/>
        </>
    );
};

export default HeadImg;