import PropTypes from "prop-types";
import { ImagePropTypes } from "./ImagePropTypes";

export const ToolbarInfoPropTypes = {
  toolbarTitle: PropTypes.string.isRequired,
  toolbarDescription: PropTypes.string.isRequired,
  toolbarScreenshot: PropTypes.shape(ImagePropTypes),
  previewTitle: PropTypes.string.isRequired,
  previewDescription: PropTypes.string.isRequired
};
