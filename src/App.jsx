// import React, { useEffect } from "react";
// import { useState } from "react";
// import Products from "./components/Products";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [isloading, setIsloading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   useEffect(() => {
//     getProducts();
//   }, []);
//   const getProducts = async () => {
//     try {
//       setIsloading(true);
//       const response = await fetch("https://fakestoreapi.com/products/");
//       if (!response.ok) {
//         throw new Error("No products here");
//       }
//       const products = await response.json();

//       setProducts(products);
//     } catch (error) {
//       setIsError(error.message);
//     }
//     setIsloading(false);
//   };
//   return (
//     <>
//       <section className="flex">
//         {products.map((product) => (
//           <Products key={product.id} product={product}/>
//         ))}
//         {isloading && <h1>Loading datas</h1>}
//         {isError && <h1>{isError}</h1>}
//       </section>
//     </>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import Products from "./components/Products";
import { useEffect } from "react";

function App() {
  const [productss, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  let datas = async () => {
    try {
      setIsloading(true);
      let response = await fetch("https://fakestoreapi.com/roducts/");
      if (!response.ok) {
        throw new Error("No product here");
      }
      let datas = await response.json();
      setProducts(datas);
    } catch (error) {
      setIsError(error.message);
    }
    setIsloading(false);
  };

  useEffect(() => {
    datas();
  }, []);
  return (
    <>
      <section className="flex">
        {productss.map((product) => (
          <Products product={product} />
        ))}
        {isloading && <h1>Loading datas</h1>}
        {isError && <h1>{isError}</h1>}
      </section>
    </>
  );
}

export default App;
