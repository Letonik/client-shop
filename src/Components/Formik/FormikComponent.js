import React, {useEffect} from 'react';
import {useField, FormikProps, Formik, useFormik, FieldArray, Field, useFormikContext} from 'formik';
import * as yup from "yup";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import UploadComponent from "./UploadComponent";

export const FormikComponent = ({validationsSchema, val, children, funcSubmit}) => {
    return (
        <Formik
            initialValues={{...val}}
            validateOnBlur
            onSubmit={(values) => {
                funcSubmit(values)
            }}
            validationSchema={validationsSchema}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty
              }) => (
                <Form onSubmit={handleSubmit}>
                    {children}
                </Form>
            )}
        </Formik>
    );
};

export const Input = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control {...field} {...props}/>
            {meta.touched && meta.error && <p>{meta.error}</p>}
        </Form.Group>
    );
};
export const Textarea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control {...field} {...props}
                          as="textarea"
                          type="textarea"/>
            {meta.touched && meta.error && <p>{meta.error}</p>}
        </Form.Group>
    );
};



export const Select = ({name, label, headSelect, fnForChange, options}) => {
    const [field, meta] = useField(name);
    useEffect(() => {
        field.value && fnForChange && fnForChange(field.value)
    }, [field.value])
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control as="select"
                          name={name}
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}>
                <option value="">{headSelect}</option>
                {options && options.map(o =>
                    <option key={o.value} value={o.value}>{o.name}</option>
                )}
            </Form.Control>
            {meta.touched && meta.error && <p>{meta.error}</p>}
        </Form.Group>
    );
};

export const InputArray = (props) => {
    const [field] = useField(props.name)
    return (
        <FieldArray
            name={props.name}
            render={(arrayHelpers) => {
                return (
                    <div>
                        {field.value.map((friend, index) => (
                            <div key={index}>
                                <Field name={`${props.name}[${index}].${props.nameArr[0]}`} placeholder={props.placeholderArr[0]}/>
                                <Field name={`${props.name}.${index}.${props.nameArr[1]}`} placeholder={props.placeholderArr[1]}/>
                                <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                    -
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => arrayHelpers.push(props.objectValues)}
                        >
                            Добавить поля
                        </button>
                    </div>
                )
            }}
        />
    )
}
export const FieldImages = (props) => {
    const {values, setFieldValue} = useFormikContext();
    return (
        <div className="form-group">
            <label htmlFor="file">Поле загрузки изображения</label>
            <UploadComponent setFieldValue={setFieldValue}/>
            {values.files &&
            values.files.map((file, i) => (
                <li key={i}>
                    {`File:${file.name} Type:${file.type} Size:${
                        file.size
                    } bytes`}{" "}
                </li>
            ))}
        </div>
    )
}
