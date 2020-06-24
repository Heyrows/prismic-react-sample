import React from "react";
import PropTypes from "prop-types";
import { ToolbarInfoPropTypes } from "../utils/PropTypes";
import { Image } from "./Image";

export const ToolbarInfo = ({ prismicData }) => (
  <div className="toolbarInfoPage">
    <Image className="toolbar_screenshot" prismicImage={prismicData.toolbarScreenshot} />
    <div className="toolbar__wrapper">
      <div className="toolbar-info__title">{prismicData.toolbarTitle}</div>
      <div className="toolbar-info__description">{prismicData.toolbarDescription}</div>
    </div>

    <div className="preview-example__wrapper">
      <div className="preview-example__title">{prismicData.previewTitle}</div>
      <div className="preview-example__description">{prismicData.previewDescription}</div>
    </div>
  </div>
);

// This part must be coherent with what return the function that fetches the HomePage
ToolbarInfo.propTypes = {
  prismicData: PropTypes.shape(ToolbarInfoPropTypes)
};
