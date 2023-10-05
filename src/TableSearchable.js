import React from "react";
import FilterableTableWithSearch from "./FilterableTableWithSearch";
export default function TableSearchable() {

    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];

    return (
        <div style={{width:"100%",height:"50vw", display:"flex", alignItems:"center" ,justifyContent:"center"}}>
            <FilterableTableWithSearch data={PRODUCTS} style={{width:"300px"}}/>
        </div>
    );
}