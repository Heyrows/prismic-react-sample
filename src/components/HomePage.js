import React from "react";
import PropTypes from "prop-types";

export const HomePage = ({ prismicData }) => (
  <React.Fragment>
    <div>{prismicData.title}</div>
    <span>{prismicData.description}</span>
    {
      prismicData.features.map(feature =>
        <div
          key={feature.name}
        >
          {feature.name} - {feature.description}
        </div>
      )
    }
  </React.Fragment>
);

// This part must be coherent with what return the function that fetch the HomePage
HomePage.propTypes = {
  prismicData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    }))
  })
};
