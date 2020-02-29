import React from "react";
import { Loader } from "./Loader";

/*
** This file handles the display of the content.
** If you want to specify more error case, you can add them here (ex: add 401 error handler)
*/
export const PrismicDataHandler = ({ prismicData, Content }) => {
  switch (prismicData.status) {
    case "loading":
      return <Loader />;
    case "ok":
      return <Content prismicData={prismicData} />;
    case "notFound":
      return <div>Not found</div>;
    case "error":
      return <div>Error</div>;
    default:
      throw Error(`Unknown Prismic Data Status - ${prismicData.status}`);
  }
};
