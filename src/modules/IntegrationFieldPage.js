import React, { useEffect, useState } from "react";
import { prismicQueries } from "../utils";
import { IntegrationFieldPage as Content, PrismicDataHandler } from "../components";

export const IntegrationFieldPage = () => {
  const [prismicData, SetPrismicData] = useState({ status: "loading" });

  useEffect(() => {
    prismicQueries.getIntegrationFieldProducts()
      .then(data => SetPrismicData(data));
  }, []);

  return (
    <PrismicDataHandler
      prismicData={prismicData}
      Content={Content}
    />
  );
};
