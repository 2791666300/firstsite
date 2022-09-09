import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  // 页面跳转
  const navigate = useNavigate();
  return (
    <div className="category-preview-container">
      <h2>
        <span
          className="title"
          onClick={() => {
            navigate(`/shop/${title}`);
          }}
        >
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4) // 返回数组中的前四组数据
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
