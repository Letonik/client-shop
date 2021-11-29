import React from "react";

export const priceFormat = (price) => {
    return `${(price+'').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')}P`;
}
