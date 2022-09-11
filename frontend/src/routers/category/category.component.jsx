import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryTitle, CateGoryContainer } from "./category.styles";

const Category = () => {
  /* useParams可以获取本路径里面的参数 也就是 /shop/arg    arg就是参数 */
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CateGoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CateGoryContainer>
    </Fragment>
  );
};

export default Category;
