import React, {useState} from 'react';
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import * as yup from "yup";
import {FormikComponent, Input, Textarea} from "../../Formik/FormikComponent";
import style from './ProfuleSetting.module.scss'

const ProfileSetting = ({
                            name, address, phone, email, changeInfo, error, alert,
                            showFormPassword, formPassword, messageSuccess, changePassword, logout
                        }) => {

    const submitInfo = (values) => {
        if (values.phone) {
            if (values.phone === '' || values.phone === phone) {
                setChangePhone(false)
            } else {
                changeInfo(values.phone)
                setChangePhone(false)
            }
        }
        if (values.address) {
            if (values.address === '' || values.address === address) {
                setChangeAddress(false)
            } else {
                changeInfo(undefined, values.address)
                setChangeAddress(false)
            }
        }
    }
    const newPassword = ({password, newPassword}) => {
        changePassword(password, newPassword)
    }
    const [changePhone, setChangePhone] = useState(false)
    const [changeAddress, setChangeAddress] = useState(false)
    const valPhone = {phone: phone};
    const valAddress = {address: address};
    const valPass = {password: '', confirmPassword: '', newPassword: ''};
    const validationsPhone = yup.object().shape({
        phone: yup.string()
    })
    const validationsAddress = yup.object().shape({
        address: yup.string()
    })
    const validationsSchema = yup.object().shape({
        password: yup.string().required('Обязательное поле'),
        newPassword: yup.string().min(6, "мин 6 сим").max(20, "max 20").typeError('Должно быть строкой').required('Обязательное поле'),
        confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'Пароли не совпадают').required('Обязательное поле'),
    })
    return (
        <Container className={style.setting}>
            <Row className={"d-flex justify-content-center"}>
                <Col md={9} lg={6}>
                    <Row className={style.item}>
                        <Col sm={3}>Имя:</Col>
                        <Col sm={9}>{name}</Col>
                    </Row>
                    <Row className={style.item}>
                        <Col sm={3}>Email:</Col>
                        <Col sm={9}>{email}</Col>
                    </Row>
                    {!changePhone && <Row className={style.item}>
                        <Col sm={3}>Телефон:</Col>
                        <Col sm={7}>{phone}</Col>
                        <Col sm={2}><span onClick={() => setChangePhone(true)}>изменить</span></Col>
                    </Row>}
                    {changePhone && <Row className={style.item}>
                        <Col>
                            <FormikComponent validationsSchema={validationsPhone} val={valPhone}
                                             funcSubmit={submitInfo}>
                                <Input name="phone" type="text" label='Телефон'/>
                                <Button type={'submit'} variant={'success'} className='mr-2'>
                                    Изменить
                                </Button>
                            </FormikComponent>
                        </Col>
                    </Row>}
                    {!changeAddress && <Row className={style.item}>
                        <Col sm={3}>Адрес:</Col>
                        <Col sm={7}>{address}</Col>
                        <Col sm={2}><span onClick={() => setChangeAddress(true)}>изменить</span></Col>
                    </Row>}
                    {changeAddress && <Row className={style.item}>
                        <Col>
                            <FormikComponent validationsSchema={validationsAddress} val={valAddress}
                                             funcSubmit={submitInfo}>
                                <Textarea name="address" label='Адрес'/>
                                <Button type={'submit'} variant={'success'} className='mr-2'>
                                    Изменить
                                </Button>
                            </FormikComponent>
                        </Col>
                    </Row>}
                    {!formPassword && <Row className={style.item}>
                        <Col onClick={() => showFormPassword(true)} className={style.passChange}>
                            Изменить пароль
                        </Col>
                    </Row>}
                    <Alert show={alert} variant={"success"} className={"mx-0"}>{messageSuccess}</Alert>
                    {formPassword && <Row className={style.item}>
                        <Col>
                            <FormikComponent validationsSchema={validationsSchema} val={valPass}
                                             funcSubmit={newPassword}>
                                <Input name="password" type="password" label='Старый пароль'/>
                                {error && <p>{error}</p>}
                                <Input name="newPassword" type="password" label='Новый пароль'/>
                                <Input name="confirmPassword" type="password" label='Подтвердите пароль'/>
                                <Button type={'submit'} variant={'success'} className='mr-2'>
                                    Изменить
                                </Button>
                                <Button variant={'danger'} onClick={() => showFormPassword(false)}>
                                    Отмена
                                </Button>
                            </FormikComponent>
                        </Col>
                    </Row>}
                    <Row className={style.logout}>
                        <Col>
                            <Button variant={'danger'} onClick={() => logout()}>Выйти</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
};


export default ProfileSetting;