import React from 'react';
import {Alert, Button, Col, Row} from "react-bootstrap";
import ReviewItem from "./ReviewItem";
import * as yup from "yup";
import {FormikComponent, Textarea} from "../Formik/FormikComponent";

const Reviews = ({reviews, addNewReview, alert, messageAlert, isAuth, checkMessage, userTokenData, changeReview}) => {
    const validationsSchema = yup.object().shape({
        text: yup.string().max(300, "Максимум 300 символов")
    })
    const val = {text: ''}

    const newReview = (val) => {
        addNewReview(val.text)
        val.text = ''
    }

    return (
        <Row>
            <Col md={8} className='my-3'>
                <Alert show={alert} variant={"success"} className={"mx-0"}>{messageAlert}</Alert>
            </Col>
            <Col md={8} className='p-4'>
                {isAuth &&
                <>
                    {checkMessage && <Alert variant={"warning"}>{checkMessage}</Alert>}
                    {!checkMessage &&
                    <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={newReview}>
                        <Textarea name="text" rows={3} label='Оставить отзыв'/>
                        <Button type={'submit'} variant={'success'}>Отправить</Button>
                    </FormikComponent>
                    }
                </>
                }
                {!isAuth &&
                <Alert variant={"warning"}>
                    Зарегистрируйтесь, чтобы оставлять отзывы
                </Alert>
                }
            </Col>
            {
                reviews && reviews.map(review => <ReviewItem review={review} key={review.id} userId={userTokenData.id}
                                                             validationsSchema={validationsSchema} changeReview={changeReview}/>)
            }

        </Row>
    );
};

export default Reviews;