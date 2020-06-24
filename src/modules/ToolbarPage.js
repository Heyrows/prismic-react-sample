/* eslint-disable */
import React, { useEffect, useState } from "react";
import { prismicQueries } from "../utils";
import { ToolbarInfo as Content, PrismicDataHandler } from "../components";

export const ToolbarPage = () => {
  const [prismicData, SetPrismicData] = useState({ status: "loading" });

  useEffect(() => {
    prismicQueries.getToolbarInfoPage()
    .then(data => SetPrismicData(data));
  }, []);

  return (
    <PrismicDataHandler
      prismicData={prismicData}
      Content={Content}
    />
  );
};
