import React, {useEffect, useState} from 'react';
import style from "../Content.module.scss";
import {FieldImages, FormikComponent, Input, InputArray, Select, Textarea} from "../../../Formik/FormikComponent";
import {Button, Col, Row} from "react-bootstrap";
import * as yup from "yup";
import {$url} from "../../../../api/api";

const CardChange = ({carousel, changeCarousel, deleteCarousel, setShow, show}) => {
    const validationsSchema = yup.object().shape({
        title: yup.string().required('Выберите сектор'),
        text: yup.string().required('Выберите категорию'),
    })
    useEffect(() => {
        setShow(true)
    }, [carousel])
    const destroyCarousel = (id) => {
        setShow(false)
        deleteCarousel(id)
    }

    return (
        <Col md={10} className={style.cardOrange}>
            <h2>Изменить карусель</h2>
            {show && <Row>
                {
                    carousel.map(c =>
                        <Col key={c.id} md={4} className={style.colCarousel}>
                            <p className={style.delCarousel}>
                                <span onClick={() => destroyCarousel(c.id)}>x</span>
                            </p>
                            <img src={$url + c.image}/>
                            <FormikComponent validationsSchema={validationsSchema} val={c} funcSubmit={changeCarousel}>
                                <Input name="title" type="text" label='Заголовок'/>
                                <Textarea name="text" rows={3} label='Содержание'/>
                                <FieldImages/>
                                <Button type={'submit'} variant={'warning'}>Применить изменения</Button>
                            </FormikComponent>
                        </Col>
                    )
                }
            </Row>}
        </Col>
    );
};

export default CardChange;