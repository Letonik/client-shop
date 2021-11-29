import React from "react";
import {Carousel} from "react-bootstrap";
import style from "./Slider.module.scss";
import {$url} from "../../../api/api";

const Slider = ({carousel}) => {
    return (
        <Carousel className={style.carousel}>
            {
            carousel.map(u =>
            <Carousel.Item>
                <img className="d-block w-100" src={$url + u.image} alt="slider"/>
                <Carousel.Caption>
                    <span><h1>{u.title.toUpperCase()}</h1></span>
                    <h3>{u.text.toUpperCase()}</h3>
                </Carousel.Caption>
            </Carousel.Item>)
            }
        </Carousel>
    )
}

export default Slider;