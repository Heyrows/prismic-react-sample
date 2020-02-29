import React, { useEffect, useState } from "react";
import { prismicQueries } from "../utils";
import { HomePage as Content, PrismicDataHandler } from "../components";

export const HomePage = () => {
  const [prismicData, SetPrismicData] = useState({ status: "loading" });

  useEffect(() => {
    prismicQueries.getHomePage()
      .then(data => SetPrismicData(data));
  }, []);

  return (
    <PrismicDataHandler
      prismicData={prismicData}
      Content={Content}
    />
  );
};
