import React from "react";
import PropTypes from "prop-types";
import { IntegrationFieldProductPropTypes } from "../utils/PropTypes";
import { Image } from "./Image";

export const IntegrationFieldProduct = ({ product }) => (
  <div className="product" >
    <Image
      prismicImage={{
        url: product.image_url,
        dimensions: {
          width: 100,
          height: 150,
        }
      }}
      className="product__image"
    />
    <div className="product__title">{product.title}</div>
    <p className="product__description">{product.description}</p>
  </div>
);

// This part must be coherent with what return the function that fetches the Integration Field Products
IntegrationFieldProduct.propTypes = {
  product: PropTypes.shape(IntegrationFieldProductPropTypes)
};
