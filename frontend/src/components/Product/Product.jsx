import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Image } from "react-bootstrap";
import Rating from "../Rating/Rating";
import "./product.css";
import { toast } from "react-hot-toast";

const Product = ({ product, match }) => {
  const history = useHistory();
  const addToCartHandler = (id) => () => {
    history.push(`/cart/${id}?qty=${1}`);
    toast.success("המוצר נוסף לעגלה", {
      icon: "🛒",
    });
  };

  return (
    <Card className="my-3 p-3 rounded text-center product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="main-img" />
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
      <Button
        onClick={addToCartHandler(product._id)}
        className="btn-block text-center"
        type="button"
        disabled={product.countInStock === 0}
      >
        הוסף לעגלה &nbsp;
        <i className="fa-solid fa-cart-plus"></i>
      </Button>
    </Card>
  );
};

export default Product;
