import PropTypes from "prop-types";
import { ImagePropTypes } from "./ImagePropTypes";

export const HomePagePropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  reactjsLogo: PropTypes.shape(ImagePropTypes),
  prismicLogo: PropTypes.shape(ImagePropTypes),
  featuresIntro: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  }))
};
