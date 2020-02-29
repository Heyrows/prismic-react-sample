import React, { useEffect, useState, Fragment } from "react";
import { prismicQueries } from "../utils";

export const HomePage = () => {
  const [prismicData, SetPrismicData] = useState(null);

  useEffect(() => {
    prismicQueries.getHomePage()
      .then(data => SetPrismicData(data));
  }, []);

  console.log(prismicData); // eslint-disable-line

  return prismicData ? (
    <Fragment>
      <div>{prismicData.title}</div>
      <div>{prismicData.description}</div>
      {
        prismicData.features.map(feature =>
          <div
            key={feature.name}
          >
            {feature.name} - {feature.description}
          </div>
        )
      }
    </Fragment>
  ) : (
    <div>Not Found</div>
  );
};
