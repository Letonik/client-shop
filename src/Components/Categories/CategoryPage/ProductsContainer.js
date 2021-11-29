import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getBrands, getProducts} from "../../../Selectors/navigationSelector";
import {requestBrands, requestProducts} from "../../../Redux/navigationReducer";
import Products from "./Products";

const ProductsContainer = (props) => {
    let [pageNumber, setPageNumber] = useState(1);
    let [sort, setSort] = useState(['boughtCount', 'DESC']);
    let [brand, setBrand] = useState('');
    let [price, setPrice] = useState(['', '']);
    let [query, setQuery] = useState('');

    useEffect(() => {
        let querySort = `?categoryId=${props.match.params.categoryId}&sort=${sort[0]}&option=${sort[1]}`;
        brand && (querySort += `&brand=${brand}`);
        price[0] && (querySort += `&min=${price[0]}`);
        price[1] && (querySort += `&max=${price[1]}`);
        setQuery(querySort);
        setPageNumber(1);
        props.requestProducts (`${querySort}&page=${1}`);
    }, [sort, brand, price]);
    useEffect(() => {
        setPageNumber(1);
        props.requestBrands(`?categoryId=${props.match.params.categoryId}`);
        props.requestProducts (`?categoryId=${props.match.params.categoryId}`)
    }, [props.match.params.categoryId])
    const setPageActive = (page) => {
        setPageNumber(page)
        props.requestProducts (`${query}&page=${page}`);
    }

    return (
        <Products products={props.products.rows} brands={props.brands} count={props.products.count}
                  setPageActive={setPageActive} pageActive={pageNumber} setSort={setSort}
                  setBrand={setBrand} setPrice={setPrice}/>
    )
}
const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        brands: getBrands(state)
    }
}
export default compose(
    connect(mapStateToProps, {requestProducts, requestBrands}),
    withRouter
)(ProductsContainer);