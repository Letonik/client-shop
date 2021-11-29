import React from 'react';
import {Container, Row} from "react-bootstrap";
import CardCreate from "./CardCreate";
import CardChange from "./CardChange";
import CardDelete from "./CardDelete";

const ProductSetting= ({props}) => {

    return (
        <Container fluid>
            <Row className={'d-flex justify-content-around'}>
                <CardCreate createProduct={props.createProduct} optionsSector={props.optionsSector}
                            requestCategories={props.requestCategories} optionsCategory={props.optionsCategory}/>
                <CardChange changeProduct={props.changeProduct} optionsSector={props.optionsSector}
                            requestCategories={props.requestCategories} optionsCategory={props.optionsCategory}
                            requestProduct={props.requestProduct} product={props.product}
                            requestProducts={props.requestProducts} optionsProducts={props.optionsProducts}
                            deleteImageProduct={props.deleteImageProduct} createImageProduct={props.createImageProduct}/>
                <CardDelete deleteProduct={props.deleteProduct} optionsSector={props.optionsSector}
                            requestCategories={props.requestCategories} optionsCategory={props.optionsCategory}
                            requestProducts={props.requestProducts} optionsProducts={props.optionsProducts}/>
            </Row>
        </Container>
    );
};

export default ProductSetting;