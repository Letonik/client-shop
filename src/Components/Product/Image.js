import React from 'react';
import {Carousel, Col, ResponsiveEmbed} from "react-bootstrap";
import {$url} from "../../api/api";

const Image = ({images}) => {

    return (
        <Col lg={8} md={12} className='p-4'>
            <Carousel fade >
                {
                    images && images.map(i =>
                    <Carousel.Item interval={15000} key={i.id}>
                        <ResponsiveEmbed aspectRatio="1by1">
                            <img className="d-block w-100" src={$url+i.name} alt="Slide"/>
                        </ResponsiveEmbed>
                    </Carousel.Item>)
                }
            </Carousel>
        </Col>
    );
};

export default Image;