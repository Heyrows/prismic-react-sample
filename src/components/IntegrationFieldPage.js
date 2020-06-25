import React from "react";
import PropTypes from "prop-types";
import { IntegrationFieldPagePropTypes } from "../utils/PropTypes";
import { IntegrationFieldProduct } from "./IntegrationFieldProduct";

export const IntegrationFieldPage = ({ prismicData }) => {
  return (
    <div className="integrationfield-page">
      {prismicData.products.map(product => <IntegrationFieldProduct key={product.title} product={product} />)}
    </div>
  );
};

// This part must be coherent with what return the function that fetches the Integration Field Products
IntegrationFieldPage.propTypes = {
  prismicData: PropTypes.shape(IntegrationFieldPagePropTypes)
};
