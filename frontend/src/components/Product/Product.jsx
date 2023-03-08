import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import Rating from "../Rating/Rating";
import "./product.css";

const Product = ({ product, match, history }) => {
  return (
    <Card className="my-3 p-3 rounded text-center product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
        <span>
          {product.countInStock > 0 ? null : (
            <Image src="../images/out-of-stock.png" className="stock-image" />
          )}
        </span>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <span>{product.name}</span>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} דירוגים`}
          />
        </Card.Text>

        <Card.Text as="h3" className="text-center mt-4">
          ₪{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
