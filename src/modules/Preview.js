import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Loader } from "../components";
import { prismicQueries } from "../utils";

/**
 ** Preview Component that redirect to the right page when previewing a document with Prismic
 */
export const Preview = ({ history, location }) => {
  useEffect(() => {
    prismicQueries.previewSession(history, location);
  });

  return <Loader />;
};

Preview.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};
