import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Content from "./Content";
import {requestCategories, requestProducts, requestSectors} from "../../../Redux/navigationReducer";
import {getCategories, getProducts, getSectors} from "../../../Selectors/navigationSelector";
import {
    createImageProduct, createNewAdmin,
    deleteImageProduct, requestChangeCarousel,
    requestChangeCategory, requestChangeProduct,
    requestChangeSector, requestCreateCarousel,
    requestCreateCategory, requestCreateProduct, requestDeleteCarousel, requestDeleteCategory, requestDeleteProduct,
    setMessageSuccess
} from "../../../Redux/adminReducer";
import {getError, getMessageSuccess} from "../../../Selectors/adminSelector";
import {getProduct} from "../../../Selectors/productSelector";
import {requestProduct} from "../../../Redux/productPageReducer";
import {getCarouselData} from "../../../Selectors/homeSelector";
import {requestCarouselHome} from "../../../Redux/homeReducer";

const ContentContainer = (props) => {

    const [modal, showModal] = useState(false)
    const [optionsCategory, setOptionsCategory] = useState([])
    const [optionsProducts, setOptionsProducts] = useState([])
    const handleCloseModal = () => {
        props.setMessageSuccess('')
        showModal(false);
    }
    useEffect(() => {
        props.requestCarouselHome()
    }, [])
    useEffect(() => {
        props.messageSuccess && showModal(true)
    }, [props.messageSuccess])
    useEffect(() => {
        const options = props.categories.map(i => {
            return  {value: i.id, name: i.name}
        })
        setOptionsCategory(options)
    }, [props.categories])
    useEffect(() => {
        if (props.products.rows) {
            const options = props.products.rows.map(i => {
                return  {value: i.id, name: i.name}
            })
            setOptionsProducts(options)
        }
    }, [props.products])
    const optionsSector = props.sectors.map(i => {
        return  {value: i.id, name: i.name}
    })
    const getProducts = (val) => {
        props.requestProducts(`?categoryId=${val}&limit=100000&sort=name&option=ASC`)
    }
    const changeSector = (values) => {
        let formData = new FormData();
        formData.append('id', values.sector);
        values.name && formData.append('name', values.name);
        values.files && formData.append('newImage', values.files[0])
        props.requestChangeSector(formData)
    }
    const changeCategory = (values) => {
        let formData = new FormData();
        formData.append('id', values.category);
        values.name && formData.append('name', values.name);
        values.files && formData.append('newImage', values.files[0])
        props.requestChangeCategory(formData)
    }
    const createCategory = (values) => {
        let formData = new FormData();
        formData.append('sectorId', values.sectorId);
        formData.append('name', values.name);
        formData.append('image', values.files[0])
        props.requestCreateCategory(formData)
    }
    const createCarousel = (values) => {
        let formData = new FormData();
        formData.append('title', values.title);
        formData.append('text', values.text);
        formData.append('image', values.files[0])
        props.requestCreateCarousel(formData)
    }
    const changeCarousel = (values) => {
        let formData = new FormData();
        formData.append('id', values.id);
        formData.append('title', values.title);
        formData.append('text', values.text);
        values.files && formData.append('newImage', values.files[0])
        props.requestChangeCarousel(formData)
    }
    const createProduct = (values) => {
        let formData = new FormData();
        formData.append('sectorId', values.sectorId);
        formData.append('categoryId', values.categoryId);
        formData.append('name', values.name);
        formData.append('price', values.price);
        formData.append('description', values.description);
        formData.append('brand', values.brand);
        formData.append('amount', values.amount);
        values.sale && formData.append('sale', values.sale);
        formData.append('info', JSON.stringify(values.info))
        formData.append('size', JSON.stringify(values.size))
        for(let i=0; i < values.files.length; i++){
            formData.append('image', values.files[i]);
        }
        props.requestCreateProduct(formData)
    }
    const changeProduct = (values) => {
        props.requestChangeProduct(values)
    }
    const addImageProduct = (values, id) => {
        let formData = new FormData();
        formData.append('productId', id);
        for(let i=0; i < values.files.length; i++){
            formData.append('image', values.files[i]);
        }
        props.createImageProduct(formData, id)
    }

    return (
        <Content sectors={props.sectors} optionsSector={optionsSector} changeSector={changeSector} modal={modal}
                 message={props.messageSuccess} handleCloseModal={handleCloseModal} changeCategory={changeCategory}
                 categories={props.categories} requestCategories={props.requestCategories} optionsCategory={optionsCategory}
                 createCategory={createCategory} deleteCategory={props.requestDeleteCategory} createProduct={createProduct}
                 changeProduct={changeProduct} requestProduct={props.requestProduct} requestProducts={getProducts}
                 product={props.product} optionsProducts={optionsProducts} deleteImageProduct={props.deleteImageProduct}
                 createImageProduct={addImageProduct} deleteProduct={props.requestDeleteProduct} carousel={props.carousel}
                 createCarousel={createCarousel} deleteCarousel={props.requestDeleteCarousel} changeCarousel={changeCarousel}
                 createNewAdmin={props.createNewAdmin} error={props.error}/>
    )
}

const mapStateToProps = (state) => {
    return {
        sectors: getSectors(state),
        messageSuccess: getMessageSuccess(state),
        categories: getCategories(state),
        products: getProducts(state),
        product: getProduct(state),
        carousel: getCarouselData(state),
        error: getError(state)
    }
}
export default compose(
    connect(mapStateToProps,
        {requestSectors, requestChangeSector, setMessageSuccess, requestChangeCategory,
            requestCategories, requestCreateCategory, requestDeleteCategory, requestCreateProduct,
            requestChangeProduct, requestProducts, requestProduct, deleteImageProduct, createImageProduct,
            requestDeleteProduct, requestCarouselHome, requestCreateCarousel, requestDeleteCarousel,
            requestChangeCarousel, createNewAdmin}),
)(ContentContainer);