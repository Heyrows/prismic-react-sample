import PropTypes from "prop-types";

export const ImagePropTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  copyright: PropTypes.string,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  })
};
