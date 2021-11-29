import React from 'react';
import Search from "./Search";
import Item from "./Item";
import {Container, Row} from "react-bootstrap";
import Paginator from "./Pagination";
import HeadImg from "../../NaviBar/HeadImg";

const Products = ({products, brands, setSort, setBrand, setPrice, count, setPageActive, pageActive}) => {

    return (
        <>
            <HeadImg />
            <Search brands={brands} setSort={setSort} setBrand={setBrand} setPrice={setPrice}/>
            <Container>
                <Row>
                    {
                        products && products.map(product =>
                            <Item key={product.id} id={product.id} name={product.name} sale={product.sale}
                                  price={product.price} image={product.images[0].name}/>
                        )
                    }
                </Row>
            </Container>
            <Paginator count={count} setPageActive={setPageActive} pageActive={pageActive}/>
        </>
    );
};

export default Products;