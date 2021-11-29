import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import style from '../Content.module.scss'
import * as yup from "yup";
import {FieldImages, FormikComponent, Input, Select} from "../../../Formik/FormikComponent";

const CardChange = ({sectors, optionsSector, changeSector}) => {
    const validationsSchema = yup.object().shape({
        sector: yup.string().required('Выберите сектор')
    })
    const [name, setName] = useState('')
    const [input, showInput] = useState(false)
    const setInput = () => {
        input ? showInput(false) : showInput(true);
    }
    const val = {sector: '', name: ''}
    const selectSector = (val) => {
        const currentSector = [...sectors].filter(s => s.id == val)
        setName(currentSector[0].name)
    }

    return (
        <Col md={5} className={style.cardOrange}>
            <h2>Изменить сектор</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={changeSector}>
                <Select name='sector' label='Сектор' headSelect='Выберите сектор' options={optionsSector}
                        fnForChange={selectSector}/>
                {name && <>
                    <span>Название: {name} </span>
                    <button type={'button'} onClick={setInput}>Изменить/Скрыть</button>
                    {input && <Input name="name" type="text"/>}
                    <FieldImages/>
                    <Button type={'submit'} variant={'warning'}>Применить изменения</Button>
                </>
                }
            </FormikComponent>
        </Col>
    );
};

export default CardChange;