import React, {useState} from 'react';
import style from "../Content.module.scss";
import {FieldImages, FormikComponent, Input, Select} from "../../../Formik/FormikComponent";
import {Button, Col} from "react-bootstrap";
import * as yup from "yup";

const CardChange = ({changeCategory, optionsSector, optionsCategory, categories, requestCategories}) => {
    const validationsSchema = yup.object().shape({
        sector: yup.string().required('Выберите сектор'),
        category: yup.string().required('Выберите категорию'),
    })
    const [nameCategory, setNameCategory] = useState('')
    const [input, showInput] = useState(false)
    const selectSector = (val) => {
        requestCategories(val)
    }
    const setInput = () => {
        input ? showInput(false) : showInput(true);
    }
    const selectCategory = (val) => {
        const currentCategory = [...categories].filter(c => c.id == val)
        setNameCategory(currentCategory[0].name)
    }
    const val = {sector: '', category: '', name: ''}
    return (
        <Col md={5} className={style.cardOrange}>
            <h2>Изменить категорию</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={changeCategory}>
                <Select name='sector' label='Сектор' headSelect='Выберите сектор' options={optionsSector}
                        fnForChange={selectSector}/>
                <Select name='category' label='Категория' headSelect='Выберите категорию'
                        options={optionsCategory}
                        fnForChange={selectCategory}/>
                {nameCategory &&
                <>
                    <span>Название: {nameCategory} </span>
                    <button type={'button'} onClick={setInput}>Изменить/Скрыть</button>
                    {input && <Input name="name" type="text"/>}
                    <FieldImages/>
                </>
                }
                <Button type={'submit'} variant={'warning'}>Применить изменения</Button>
            </FormikComponent>
        </Col>
    );
};

export default CardChange;