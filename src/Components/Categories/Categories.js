import React from "react";
import Category from "./Category";
import {Container, Row} from "react-bootstrap";
import HeadImg from "../NaviBar/HeadImg";

const Categories = ({props}) => {

    return (
        <>
            <HeadImg />
            <Container>
                <Row className='pb-5'>
                    {
                        props.categories.map(category =>
                            <Category key={category.id} name={category.name} image={category.image} id={category.id}/>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

export default Categories;
