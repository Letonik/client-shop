import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import slider1 from "../../../Assets/Images/slider1.jpg"

const Other = () => {
    return (
        <Container style={{marginBottom:"30px"}}>
            <Row>
               <Col md={7}>
                   <img src={slider1} alt="img" height={400}/>
               </Col>
                <Col md={5}>
                    <h2>Text about clothes</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam assumenda commodi consequuntur deleniti dignissimos dolorem doloremque dolorum ex facere fugiat id in ipsam laboriosam magnam magni minima neque nihil nulla odio pariatur quae quaerat reiciendis sequi similique voluptatem voluptates! Ab facere fugit obcaecati quasi sequi? Adipisci alias ducimus eligendi incidunt inventore, iste mollitia nemo officiis omnis perferendis possimus similique?
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Other;