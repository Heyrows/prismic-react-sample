import React from "react";
import PropTypes from "prop-types";
import { ImagePropTypes } from "../utils/PropTypes";

export const Image = ({ prismicImage }) => prismicImage && (
  <img
    src={prismicImage.url}
    width={prismicImage.dimensions.width}
    height={prismicImage.dimensions.height}
    alt={prismicImage.alt}
  />
);

Image.propTypes = {
  prismicImage: PropTypes.shape(ImagePropTypes)
};
