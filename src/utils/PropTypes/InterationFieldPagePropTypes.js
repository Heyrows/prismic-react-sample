import PropTypes from "prop-types";

export const IntegrationFieldProductPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export const IntegrationFieldPagePropTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(IntegrationFieldProductPropTypes))
};
