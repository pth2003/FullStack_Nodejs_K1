import React from "react";
// export const metadata = {
//   title: "Chi tiet san pham",
// };
export const generateMetadata = ({ params }) => {
  return {
    title: "Sản phẩm " + params.id,
  };
};
const ProductDetail = ({ params }) => {
  //   console.log(params);
  return <h2>Chi tiet san pham : {params.id}</h2>;
};

export default ProductDetail;
