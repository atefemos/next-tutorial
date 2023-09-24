import React from "react";

interface Props {
  params: { slag: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage</div>;
};

export default ProductPage;
