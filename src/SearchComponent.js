import React from "react";


export default function SearchComponent(params) {
    return (
        <form style={{display:"flex", flexDirection: "column"}}>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
}