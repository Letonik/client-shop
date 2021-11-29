import React from 'react';
import {Accordion, Card, Container} from "react-bootstrap";
import style from './Content.module.scss'
import WindowSuccess from "../../WindowSuccess/WindowSuccess";
import CategorySetting from "./CategorySetting/CategorySetting";
import ProductSetting from "./ProductSetting/ProductSetting";
import CarouselSetting from "./CarouselSetting/CarouselSetting";
import SectorsSetting from "./SectorSetting/SectorsSetting";
import CreateAdmin from "./CreateAdmin/CreateAdmin";

const Content = (props) => {
    const cards = [
        {component: <ProductSetting props={props}/>, key: 1, name: "Товары"},
        {component: <CategorySetting props={props}/>, key: 2, name: "Категории"},
        {component: <SectorsSetting props={props}/>, key: 3, name: "Сектор"},
        {component: <CarouselSetting props={props}/>, key: 4, name: "Карусель"},
        {component: <CreateAdmin props={props}/>, key: 5, name: "Новый админ"},
    ]
    return (
        <Container fluid className={style.contentAdmin}>
            <WindowSuccess show={props.modal} message={props.message} handleCloseModal={props.handleCloseModal}/>
            <Accordion>
                {
                    cards.map(c =>
                        <Card key={c.key}>
                            <Accordion.Toggle as={Card.Header} eventKey={c.key} className={style.accHeader}>
                                <h4><b>{c.name}</b></h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={c.key}>
                                <Card.Body>{c.component}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                }
            </Accordion>
        </Container>
    );
};

export default Content;