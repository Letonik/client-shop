import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PieCharts from "./PieCharts";
import Charts from "./Charts";
import style from './Statistic.module.scss'
import Tables from "./Tables";

const Statistic = ({statisticPie, sectors, statisticChartsFirst, statisticChartsSecond, table}) => {
    return (
<>
        <Container fluid className={style.statistic}>
            {sectors.length > 0 &&
            <Row className="p-4 m-0">
                <Col xs="12" md="6" >
                    <h2>{sectors[0].name}</h2>
                    <Charts data={statisticChartsFirst} color={'#edd0a4'}/>
                </Col>
                <Col xs="12" xl="6">
                    <h2>{sectors[1].name}</h2>
                    <Charts data={statisticChartsSecond} color={'#fac7c6'}/>
                </Col>
            </Row>
            }
            <Row className="m-0 d-flex justify-content-center" >
                <Col xs="12" md="6">
                    <PieCharts statisticPie={statisticPie} sectors={sectors}/>
                </Col>
            </Row>
            <Row className="my-5" >
                <Col xs="12" md="6" className={style.firstTable}>
                    <Tables table={table[0]}/>
                </Col>
                <Col xs="12" md="6" className={style.secondTable}>
                    <Tables table={table[1]}/>
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default Statistic;