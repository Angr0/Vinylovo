import React from "react";
import Product from "../components/Product";

const Products = () => {
  const products = [
    { name: "Vinyl 1", price: 48, rating: 2.5 },
    { name: "Vinyl 2", price: 234, rating: 0.5 },
    { name: "Vinyl 3", price: 54, rating: 1 },
    { name: "Vinyl 4", price: 98, rating: 3.5 },
    { name: "Vinyl 5", price: 456, rating: 5 },
    { name: "Vinyl 6", price: 98, rating: 3 },
    { name: "Vinyl 7", price: 23, rating: 2 },
    { name: "Vinyl 8", price: 82, rating: 1 },
    { name: "Vinyl 9", price: 764, rating: 4.5 },
    { name: "Vinyl 10", price: 9, rating: 4.5 },
    { name: "Vinyl 11", price: 4338, rating: 4.5 },
    { name: "Vinyl 12", price: 23, rating: 4.5 },
    { name: "Vinyl 13", price: 48, rating: 4.5 },
    { name: "Vinyl 14", price: 985, rating: 4.5 },
    { name: "Vinyl 15", price: 25, rating: 4.5 },
  ];
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-around gap-4 py-8 px-2 md:px-4">
        {products.map(({ name, price, rating }) => (
          <Product
            key={name}
            formatter={formatter}
            name={name}
            price={price}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
