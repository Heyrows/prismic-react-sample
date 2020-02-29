import React from "react";
import { Redirect } from "react-router-dom";
import { Loader } from "./Loader";

/*
** This file handles the display of the content.
** If you want to specify more error case, you can add them here (ex: add 401 error handler)
** and then modify the function that generates the error object in utils/prismicQueries.js
*/
export const PrismicDataHandler = ({ prismicData, Content }) => {
  switch (prismicData.status) {
    case "loading":
      return <Loader />;
    case "ok":
      return <Content prismicData={prismicData} />;
    case "notFound":
      return <Redirect to="/404" />;
    case "error":
      return <div>{prismicData.message}</div>;
    default:
      throw Error(`Unknown Prismic Data Status - ${prismicData.status}`);
  }
};
