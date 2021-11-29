import React, {Component, PureComponent} from "react";
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Pagination.module.scss'

class Paginator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activePage: this.props.pageActive
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({activePage: this.props.pageActive});
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        this.props.setPageActive(pageNumber)
    }

    render() {
        return (
            <div className={style.main}>
                <Pagination
                    itemClass="page-item"
                    linkClass={style.links}
                    activeLinkClass={style.linkClass}
                    activePage={this.state.activePage}
                    itemsCountPerPage={9}
                    totalItemsCount={this.props.count}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}

export default Paginator;