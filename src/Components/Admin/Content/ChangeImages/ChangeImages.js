import React from 'react';
import {Col, Row} from "react-bootstrap";
import {$url} from "../../../../api/api";
import style from '../Content.module.scss'

const ChangeImages = ({images, fnDelete}) => {
    return (
        <Row className={'my-4'}>
            {
                images.map(i =>
                    <Col key={i.id} xs={4} className={"my-3 "+style.imageParent}>
                        <img className={style.image} src={$url + i.name}/>
                        <p className={style.del} onClick={() => fnDelete(i.name)}>x</p>
                    </Col>
                )
            }
        </Row>
    );
};

export default ChangeImages;