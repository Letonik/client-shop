import React from 'react';
import {Container, Row} from "react-bootstrap";
import CardChange from "./CardChange";
import CardCreate from "./CardCreate";
import CardDelete from "./CardDelete";

const CategorySetting = ({props}) => {

    return (
        <Container fluid>
            <Row className={'d-flex justify-content-around'}>
                <CardCreate createCategory={props.createCategory} optionsSector={props.optionsSector}/>
                <CardChange changeCategory={props.changeCategory} optionsSector={props.optionsSector}
                            categories={props.categories} optionsCategory={props.optionsCategory}
                            requestCategories={props.requestCategories}/>
                <CardDelete optionsCategory={props.optionsCategory} optionsSector={props.optionsSector}
                            deleteCategory={props.deleteCategory} requestCategories={props.requestCategories}/>
            </Row>
        </Container>
    );
};


export default CategorySetting;