import React, {useEffect, useState} from 'react';
import {Button, Col} from "react-bootstrap";
import style from "../Content.module.scss";
import {FieldImages, FormikComponent, Input, InputArray, Select, Textarea} from "../../../Formik/FormikComponent";
import * as yup from "yup";
import ChangeImages from "../ChangeImages/ChangeImages";

const CardChange = ({
                        optionsSector, optionsCategory, optionsProducts, changeProduct, requestCategories,
                        requestProduct, requestProducts, product, deleteImageProduct, createImageProduct
                    }) => {
    const [id, setId] = useState('')
    useEffect(() => {
        setId(product.id)
    }, [product])

    const validationsSchemaSelect = yup.object().shape({
        sectorId: yup.string().required('Выберите сектор'),
        categoryId: yup.string().required('Выберите категорию'),
        productId: yup.string().required('Выберите продукт'),
    })
    const validationsSchemaProduct = yup.object().shape({
        name: yup.string().required('Ведите название'),
        price: yup.number('Должно быть числом').required('Ведите цену'),
        sale: yup.number('Должно быть числом'),
        description: yup.string().required('Ведите описание'),
        brand: yup.string().required('Ведите бренд'),
        amount: yup.number('Должно быть числом').required('Ведите колличество'),
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
    const validationsSchemaImage = yup.object().shape({
        files: yup.mixed().required('Выберите изображение')
    })

    const val = {
        sectorId: '',
        categoryId: '',
        productId: ''
    }
    const selectSector = (val) => {
        requestCategories(val)
    }
    const selectCategory = (val) => {
        requestProducts(val)
    }
    const selectProduct = (val) => {
        setId('')
        requestProduct(val)
    }
    const deleteImage = (name) => {
        deleteImageProduct(name, id)
        setId('')
    }
    const createImage = (val) => {
        createImageProduct(val, id)
        setId('')
    }
    return (
        <Col md={5} className={style.cardOrange}>
            <h2>Изменить продукт</h2>
            <FormikComponent validationsSchema={validationsSchemaSelect} val={val} funcSubmit={changeProduct}>
                <Select name='sectorId' label='Сектор' headSelect='Выберите сектор' options={optionsSector}
                        fnForChange={selectSector}/>
                <Select name='categoryId' label='Категория' headSelect='Выберите категорию' options={optionsCategory}
                        fnForChange={selectCategory}/>
                <Select name='productId' label='Продукт' headSelect='Выберите продукт' options={optionsProducts}
                        fnForChange={selectProduct}/>
            </FormikComponent>
            {id &&
            <>
                <FormikComponent validationsSchema={validationsSchemaProduct} val={product} funcSubmit={changeProduct}>
                    <Input name="name" type="text" label='Название продукта'/>
                    <Input name="price" type="text" label='Цена продукта'/>
                    <Input name="sale" type="text" label='Скидка продукта'/>
                    <Textarea name="description" rows={3} label='Описание продукта'/>
                    <Input name="brand" type="text" label='Бренд продукта'/>
                    <Input name="amount" type="text" label='Колличество продукта'/>
                    <p>Информация</p>
                    <InputArray name={'info'} objectValues={{title: '', information: ''}}
                                nameArr={['title', 'information']}
                                placeholderArr={['Заголовок', 'Текст']}/>
                    <p>Размеры</p>
                    <InputArray name={'size'} objectValues={{name: '', amount: ''}} nameArr={['name', 'amount']}
                                placeholderArr={['Название', 'Колличество']}/>
                    <Button type={'submit'} variant={'warning'}>Применить изменения</Button>
                </FormikComponent>
                <ChangeImages images={product.images} fnDelete={deleteImage}/>
                <FormikComponent validationsSchema={validationsSchemaImage} funcSubmit={createImage}>
                  <FieldImages/>
                    <Button type={'submit'} variant={'warning'}>Отправить изображения</Button>
                </FormikComponent>
            </>
            }
        </Col>
    );
};

export default CardChange;