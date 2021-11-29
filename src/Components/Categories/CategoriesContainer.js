import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getCategories} from "../../Selectors/navigationSelector";
import {requestCategories} from "../../Redux/navigationReducer";
import Categories from "./Categories";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const CategoriesContainer = (props) => {
    useEffect(() => {
        let sectorId = props.match.params.sectorId;
        props.requestCategories(sectorId);
    }, [])
    return (
        <Categories props={props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: getCategories(state)
    }
}
export default compose(
    connect(mapStateToProps, {requestCategories}),
    withRouter
)(CategoriesContainer);