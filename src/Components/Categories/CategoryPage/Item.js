import React from 'react';
import {Button, Card, Col, Container, ResponsiveEmbed, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import style from './Item.module.scss'
import {$url} from "../../../api/api";
import {priceFormat} from "../../HelpFunc/Price";

const Item = ({id, name, price, sale, image}) => {
    return (
        <Col sm={6} md={4} className={"mx-auto m-2"}>
            <NavLink to={"/product/" + id}>
            <Card className={style.body}>
                <ResponsiveEmbed aspectRatio="1by1">
                    <Card.Img variant="top" src={$url + image}/>
                </ResponsiveEmbed>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {price == sale &&
                    <Card.Text>{priceFormat(price)} Р</Card.Text>}
                    {price != sale &&
                    <Card.Text><span>{priceFormat(sale)} P </span><s>{priceFormat(price)} P</s></Card.Text>}
                </Card.Body>
            </Card>
            </NavLink>
        </Col>
    );
};

export default Item;