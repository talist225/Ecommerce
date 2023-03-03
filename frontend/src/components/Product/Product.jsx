import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Rating from "../Rating/Rating";

const Product = ({ product, match, history }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
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
