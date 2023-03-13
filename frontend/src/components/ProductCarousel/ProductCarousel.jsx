import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import { listTopProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import "./productCarousel.css";
import Fade from "react-reveal/Fade";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Fade bottom>
      <Carousel fade pause="hover" className="mt-4">
        {products.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`} className="product-details">
              <Image src={product.image} alt={product.name} />
              <Carousel.Caption className="carousel-caption">
                <h4>{product.name}</h4>
                <h5>₪{product.price}</h5>
              </Carousel.Caption>
              <span aria-hidden="true" className="carousel-control-next-icon" />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </Fade>
  );
};

export default ProductCarousel;
