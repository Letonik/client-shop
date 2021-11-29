import React from 'react';
import preloader from '../../Assets/Images/preloader.svg'
import style from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={style.spinner}>
            <img src={preloader} alt=""/>
        </div>
    );
};

export default Spinner;