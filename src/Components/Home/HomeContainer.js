import React, {useEffect} from "react";
import {connect} from "react-redux";
import Home from "./Home";
import {getCarouselData, getClothes, getCosmetic} from "../../Selectors/homeSelector";
import {getSectors} from "../../Selectors/navigationSelector";
import {requestHome} from "../../Redux/homeReducer";
import {getLoading} from "../../Selectors/loadingSelector";
import Spinner from "../Spinner/Spinner";

const HomeContainer = (props) => {
    useEffect(() => {
        props.requestHome();
    }, [])
    return (
        <>
            {props.loading && <Spinner/>}
            <Home props={props}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: getLoading(state),
        carousel: getCarouselData(state),
        sectors: getSectors(state),
        cosmetic: getCosmetic(state),
        clothes: getClothes(state)
    }
}

export default connect(mapStateToProps, {requestHome})(HomeContainer);