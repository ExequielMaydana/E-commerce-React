import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../home/ProductCard";

const SimilarProduct = ({ product }) => {

  const [filterProduct, setFilterProduct] = useState();

  const allProducts = useSelector((state) => state.products);

  console.log(allProducts);

  useEffect(() => {
    if (allProducts.length !== 0) {
      const filterP = allProducts.filter(
        (e) => e.category.name === product?.category
      );
      setFilterProduct(filterP);
    }
  }, [product]);
  console.log(filterProduct);
  return (
    <article className="similar__products">
      <h2 className="simirlar__products-title">Discover similar items</h2>
      <section className="home__container-cards">
        {filterProduct?.map((p) => {
          if (p.title !== product.title) {
            return <ProductCard key={p.id} product={p} />;
          }
        })}
      </section>
    </article>
  );
};

export default SimilarProduct;
