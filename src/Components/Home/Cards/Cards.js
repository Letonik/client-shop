import React from "react";
import CardPC from "./CardPC";
import CardPhone from "./CardPhone";

const Cards = ({clothes, cosmetic}) => {
    console.log(cosmetic)
    return (
        <>
            <CardPC products={clothes.rows}/>
            <CardPC products={cosmetic.rows}/>
            <CardPhone products={clothes.rows}/>
            <CardPhone products={cosmetic.rows}/>
        </>
    )
}

export default Cards;