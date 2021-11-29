import React from 'react';
import * as yup from "yup";
import style from './Search.module.scss';
import {Button, Col, Container, Row} from "react-bootstrap";
import {FormikComponent, Input, Select} from "../../Formik/FormikComponent";

const Search = ({brands, setSort, setBrand, setPrice}) => {
    const validationsSchema = yup.object().shape({
        min: yup.number().typeError('Некорректное значение'),
        max: yup.number().typeError('Некорректное значение')
    });
    const val = {sort: '', brand: '', min: '', max: ''};

    const changePrice = ({min, max}) => {
        setPrice([min, max]);
    }
    const changeBrand = (val) => {
        setBrand(val)
    }
    const changeSort = (val) => {
        if (!val) {
            setSort(['boughtCount', 'DESC']);
        } else {
            setSort(val.split('-'));
        }
    }
    const optionsSort = [
        {value: "sale-ASC", name: "цене (возр)"},
        {value: "sale-DESC", name: "цене (уб)"},
        {value: "boughtCount-DESC", name: "популярности"},
        {value: "createdAt-DESC", name: "новизне"}
    ];

    return (
        <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={changePrice}>
            <Container>
                <Row>
                    <Col className={"px-4 d-flex justify-content-center " + style.text} md={3} xs={6}>
                        <Select name='sort' headSelect='Сортировать по:' options={optionsSort}
                                fnForChange={changeSort}/>
                    </Col>
                    <Col className={"px-4 d-flex justify-content-center " + style.text} md={3} xs={6}>
                        <Select name='brand' headSelect='Выбор бренда:' options={brands}
                                fnForChange={changeBrand}/>
                    </Col>
                    <Col className={"px-4 " + style.text + ' ' + style.position} md={2} xs={6}>
                        <Input name="min" type="text" placeholder="мин. цена"/>
                    </Col>
                    <Col className={"px-4 " + style.text + ' ' + style.position} md={2} xs={6}>
                        <Input name="max" type="text" placeholder="макс. цена"/>
                    </Col>
                    <Col className={"px-4 " + style.text + ' ' + style.position} md={2} xs={12}>
                        <Button
                            type={'submit'}>Применить
                        </Button>
                    </Col>
                </Row>
            </Container>
        </FormikComponent>
    );
};

export default Search;