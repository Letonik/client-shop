import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import style from "./ReviewItem.module.scss"
import {FormikComponent, Textarea} from "../Formik/FormikComponent";

const ReviewItem = ({review, userId, validationsSchema, changeReview}) => {
    const [check, setCheck] = useState(false);
    const [changeRew, setChangeRew] = useState(false);
    useEffect(() => {
        (userId == review.userId) && setCheck(true);
    },[])
    const val = {text: review.text}
    const sendChange = ({text}) => {
        changeReview(text, review.productId)
        setChangeRew(false)
    }
    return (
        <Col md={8} className={'m-3 ' + style.body}>
            <Row className={'d-flex justify-content-between py-2 ' + style.head}>
                <Col xs={6}>
                    {review.name}
                </Col>
                <Col xs={6} className={style.time}>
                    {review.updatedAt}
                    {check &&
                        <span onClick={() => setChangeRew(true)}> изменить</span>
                    }
                </Col>
            </Row>
            <hr/>
            <Row>
                {!changeRew &&
                <Col className={'py-2'}>
                    {review.text}
                </Col>
                }
                {changeRew &&
                <Col className={'py-2'}>
                <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={sendChange}>
                    <Textarea name="text" rows={3}/>
                    <Button type={'submit'} variant={'success'}>Отправить</Button>
                </FormikComponent>
                </Col>
                }
            </Row>
        </Col>
    );
};

export default ReviewItem;