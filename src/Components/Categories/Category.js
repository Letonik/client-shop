import React, {useState} from "react";
import {Card, Col, ResponsiveEmbed, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import style from "./Category.module.scss"
import {$url} from "../../api/api";

const Category = ({id, name, image}) => {

    return (
        <Col md={4} xs={6} className={"mx-auto m-2"}>
            <NavLink to={"/categories/" + id}>
                <Card className={"bg-dark text-white " + style.category}>
                    <ResponsiveEmbed aspectRatio="1by1">
                    <Card.Img src={$url + image} alt={name}/>
                        </ResponsiveEmbed>
                    <Card.ImgOverlay>
                        <Card.Title className={style.title}>{name.toUpperCase()}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </NavLink>
        </Col>
    )
}

export default Category;