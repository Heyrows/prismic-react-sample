import React, { useEffect, useState } from "react";
import { prismicQueries } from "../utils";
import { HomePage as Content, PrismicDataHandler } from "../components";

export const Toolbar = () => {
  const [prismicData, SetPrismicData] = useState({ status: "loading" });

  useEffect(() => {
  }, []);

  return (
    <PrismicDataHandler
      prismicData={prismicData}
      Content={Content}
    />
  );
};
