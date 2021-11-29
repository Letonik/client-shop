import React from "react";
import {Carousel, Col, Row, ResponsiveEmbed} from "react-bootstrap";
import style from "./Cards.module.scss"
import {$url} from "../../../api/api";
import {NavLink} from "react-router-dom";
import {priceFormat} from "../../HelpFunc/Price";

const CardPhone = ({products}) => {
    let newProducts = []
    if (products) {
        for (let i = 0; i < products.length; i += 2) {
            newProducts.push([products[i], products[i + 1]])
        }
    }
    return (
        <Carousel className={style.carouselPhone} indicators={false}>
            {
                newProducts.map(u =>
                    <Carousel.Item>
                        <Row className="d-flex justify-content-center">
                            {u.map(product =>
                                 <Col sm={5} xs={8} className={style.item}>
                                     <NavLink to={"/product/" + product.id}>
                                     <ResponsiveEmbed aspectRatio="1by1">
                                         <img className="d-block w-100"
                                              src={$url + product.images[0].name}
                                              alt="slider"/>
                                     </ResponsiveEmbed>
                                     {product.price == product.sale &&
                                     <h1>{priceFormat(product.price)}</h1>}
                                     {product.price != product.sale &&
                                     <h1><span>{priceFormat(product.sale)} </span><s>{priceFormat(product.price)}</s></h1>}
                                     </NavLink>
                                 </Col>
                            )}
                        </Row>
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
};

export default CardPhone;