import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "טל-פון",
  description: "חנות אינטרנטית לכל מוצרי האלקטרוניקה",
  keywords: "המוצרים הטובים ביותר במחיר הזול ביותר!",
};

export default Meta;
