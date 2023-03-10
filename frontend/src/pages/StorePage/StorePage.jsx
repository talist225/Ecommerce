import React, { useEffect } from "react";
import Meta from "../../components/Meta/Meta";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product/Product";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import Paginate from "../../components/Paginate/Paginate";
import { listProducts } from "../../actions/productActions";
import Fade from "react-reveal/Fade";
import "./storePage.css";

const StorePage = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Fade bottom>
        <Meta />
        <h1 className="mt-5 text-center shop-title">המוצרים שלנו</h1>
        <span className="store-info">
          יש להשתמש בשורת החיפוש כדי לסנן את הרשימה ולמצוא מוצר ספציפי
        </span>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
      </Fade>
    </>
  );
};
export default StorePage;
