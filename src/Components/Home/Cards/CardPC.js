import React from "react";
import {Carousel, Col, Row, ResponsiveEmbed} from "react-bootstrap";
import style from "./Cards.module.scss"
import {$url} from "../../../api/api";
import {priceFormat} from "../../HelpFunc/Price";
import {NavLink} from "react-router-dom";

const CardPC = ({products}) => {
    let newProducts = []
    if (products) {
        for (let i = 0; i < products.length; i += 3) {
            newProducts.push([products[i], products[i + 1], products[i + 2]])
        }
    }
    return (
        <Carousel className={style.carouselPC} indicators={false}>
            {
                newProducts.map(p =>
                    <Carousel.Item key={p.id}>
                        <Row className="d-flex justify-content-center">
                            {p.map(product =>
                                 <Col md={3} className={style.item} key={product.id}>
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

export default CardPC;