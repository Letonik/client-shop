import React, {useState} from 'react';
import {Button, Col} from "react-bootstrap";
import style from "../Content.module.scss";
import {FieldImages, FormikComponent, Input, InputArray, Select, Textarea} from "../../../Formik/FormikComponent";
import * as yup from "yup";

const CardCreate = ({optionsSector, optionsCategory, createProduct, requestCategories}) => {
    const [showFields, setShowFields] = useState(false)
    const validationsSchema = yup.object().shape({
        sectorId: yup.string().required('Выберите сектор'),
        categoryId: yup.string().required('Выберите категорию'),
        name: yup.string().required('Ведите название'),
        price: yup.number('Должно быть числом').required('Ведите цену'),
        sale: yup.number('Должно быть числом'),
        description: yup.string().required('Ведите описание'),
        brand: yup.string().required('Ведите бренд'),
        amount: yup.number('Должно быть числом').required('Ведите колличество'),
        files: yup.mixed().required('Выберите изображение'),
        info: yup.array()
            .of(yup.object().shape({
                    title: yup.string().required('Введите название'),
                    information: yup.string().required('Введите текст'),
                })
            ),
        size: yup.array()
            .of(yup.object().shape({
                    name: yup.string().required('Введите название'),
                amount: yup.number().required('Введите колличество'),
                })
            ),
    })
    const val = {
        sectorId: '',
        categoryId: '',
        name: '',
        price: '',
        description: '',
        brand: '',
        amount: '',
        sale: '',
        info: [],
        size: [],
    }
    const selectSector = (val) => {
        requestCategories(val)
    }
    const selectCategory = (val) => {
        setShowFields(true)
    }
    return (
        <Col md={5} className={style.cardGreen}>
            <h2>Создать продукт</h2>
            <FormikComponent validationsSchema={validationsSchema} val={val} funcSubmit={createProduct}>
                <Select name='sectorId' label='Сектор' headSelect='Выберите сектор' options={optionsSector}
                        fnForChange={selectSector}/>
                <Select name='categoryId' label='Категория' headSelect='Выберите категорию' options={optionsCategory}
                        fnForChange={selectCategory}/>
                {showFields && <>
                <Input name="name" type="text" label='Название продукта'/>
                <Input name="price" type="text" label='Цена продукта'/>
                <Input name="sale" type="text" label='Скидка продукта'/>
                <Textarea name="description" rows={3} label='Описание продукта'/>
                <Input name="brand" type="text" label='Бренд продукта'/>
                <Input name="amount" type="text" label='Колличество продукта'/>
                <p>Информация</p>
                <InputArray name={'info'} objectValues={{title: '', information: ''}} nameArr={['title', 'information']}
                            placeholderArr={['Заголовок', 'Текст']}/>
                <p>Размеры</p>
                <InputArray name={'size'} objectValues={{name: '', amount: ''}} nameArr={['name', 'amount']}
                            placeholderArr={['Название', 'Колличество']}/>
                <FieldImages/>
                <Button type={'submit'} variant={'success'}>Создать продукт</Button>
                </>}
            </FormikComponent>
        </Col>
    );
};

export default CardCreate;