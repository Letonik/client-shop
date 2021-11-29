import React from "react";
import Cards from "./Cards/Cards";
import Jumbotron from "./Jumbotron/Jumbotron";

import Slider from "./Slider/Slider";
import Sector from "./Sectors/Sector";
import New from "./New/New";
const Home = ({props}) => {
    return (
        <>
            <Slider carousel={props.carousel}/>
            <Sector sectors={props.sectors}/>
            <Jumbotron/>
            <New/>
            <Cards clothes={props.clothes} cosmetic={props.cosmetic}/>
        </>
    )
}

export default Home;