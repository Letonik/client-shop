import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {requestStatistic, requestTable} from "../../../Redux/adminReducer";
import {
    getStatisticChartsFirst,
    getStatisticChartsSecond,
    getStatisticPie,
    getTable
} from "../../../Selectors/adminSelector";
import Statistic from "./Statistic";
import {getSectors} from "../../../Selectors/navigationSelector";

const StatisticContainer = (props) => {
    useEffect(() => {
        let dateNow = new Date().toLocaleDateString().split('.').slice(1, 3)
        let dateArr = [[dateNow[1], dateNow[0]].join('-')]
        for (let i = 0; i < 5; i++) {
            if (dateNow[0] > 1) {
                dateNow[0] -= 1;
                dateNow[0] < 10 && (dateNow[0] = '0' + String(dateNow[0]));
                dateArr = [...dateArr, [dateNow[1], dateNow[0]].join('-')]
            } else {
                dateNow[1] -= 1;
                dateNow[0] = 12
                dateArr = [...dateArr, [dateNow[1], dateNow[0]].join('-')]
            }
        }
        props.requestStatistic(dateArr);
        props.requestTable();
    }, [])

    return (
        <Statistic statisticPie={props.statisticPie} sectors={props.sectors}
                   statisticChartsFirst={props.statisticChartsFirst}
                   statisticChartsSecond={props.statisticChartsSecond}
                   table={props.table}/>
    )
}

const mapStateToProps = (state) => {
    return {
        statisticPie: getStatisticPie(state),
        statisticChartsFirst: getStatisticChartsFirst(state),
        statisticChartsSecond: getStatisticChartsSecond(state),
        sectors: getSectors(state),
        table: getTable(state)
    }
}
export default compose(
    connect(mapStateToProps,
        {requestStatistic, requestTable}),
)(StatisticContainer);
