import React from "react";
import { mapValues, groupBy, omit } from "lodash";
import SearchComponent from "./SearchComponent";

export default function FilterableTableWithSearch({ data }) {
  return (
    <div>
      <SearchComponent />
      <StockTable data={data} />
    </div>
  );
}

function StockTable({ data }) {
  var groupedData = mapValues(groupBy(data, "category"), (categoryList) =>
    categoryList.map((obj) => omit(obj, "category"))
  );

  let categoryList = Object.keys(groupedData);

  console.log("categoryList", categoryList);
  console.log("data", data);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {categoryList &&
          categoryList.map((cat) => {
            return (
              <tr>
                <CategoryRow category={cat} />

                {data.map((prod) => {
                  return prod.category === cat && <ProductRow product={prod} />;
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

function ProductRow({ product }) {
  console.log("produ ", product);
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function CategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

//  const categoryItems =  categoryList && categoryList.map((category) => {
//   return (
//      <tr>
//          <td>{category}</td>
//          {itemsByCategory.category && itemsByCategory.category.map(obj => <ProductRow product={obj}/>)}
//      </tr>
//   )
//  })
// return(
//   {categoryItems}
// );
