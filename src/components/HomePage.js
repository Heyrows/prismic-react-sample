import React from "react";
import PropTypes from "prop-types";
import { HomePagePropTypes } from "../utils/PropTypes";
import { Image } from "./Image";

export const HomePage = ({ prismicData }) => (
  <div className="homepage">
    <div className="homepage__title">{prismicData.title}</div>
    <span className="homepage__logos">
      <Image prismicImage={prismicData.prismicLogo} />
      <Image prismicImage={prismicData.reactjsLogo} />
    </span>
    <p className="homepage__description">{prismicData.description}</p>
    <div className="homepage__featuresIntro">{prismicData.featuresIntro}</div>
    {
      prismicData.features.map(feature => (
        <React.Fragment key={feature.name}>
          <div className="homepage__feature__name">The {feature.name} feature :</div>
          <div className="homepage__feature__description">{feature.description}</div>
        </React.Fragment>
      ))
    }
  </div>
);

// This part must be coherent with what return the function that fetches the HomePage
HomePage.propTypes = {
  prismicData: PropTypes.shape(HomePagePropTypes)
};
