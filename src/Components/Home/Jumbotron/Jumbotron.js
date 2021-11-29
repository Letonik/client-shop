import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import style from "./Jumbotron.module.scss";

const Jumbotron = () => {
    return (
            <Jumbo fluid className={style.jumbo}>
                <div className={style.overlay}></div>
                <Container fluid>
                    <h1>Something words</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, beatae doloremque ex mollitia odio
                        quisquam tempore temporibus? Animi, aspernatur at atque commodi dolorum eum iste maxime minus
                        molestiae nobis odit praesentium quaerat quis quisquam reiciendis vel, voluptatibus? Aspernatur,
                        aut, error.</p>
                </Container>
            </Jumbo>
    )
}
export default Jumbotron;