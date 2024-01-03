// import React from "react";

// const Products = ({ product }) => {
//   const { title, price, image } = product;
//   return (
//     <div className="prod">
//       <img src={image} alt="" />
//       <h3>{title}</h3>
//       <p className="price">${price}</p>
//       {/* <p className="des">{description}</p> */}
//     </div>
//   );
// };

// export default Products;
import React from "react";

function Products({ product }) {
  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
}

export default Products;
