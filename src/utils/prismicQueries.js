import { RichText } from "prismic-reactjs";
import { prismicClient } from "./prismicClient";

/*
** In this file, we get content from Prismic and parse it.
** This way, the react components are easier to understand
*/

/*
** This function builds an error object which will be displayed
*/
const buildErrorObject = error => {
  if (error.message.indexOf("[404]") > 0) {
    return {
      status: "notFound"
    };
  }
  return {
    status: "error",
    message: error.message
  };
};

/*
** This function fetches the HomePage document and build the data to display
*/
async function getHomePage() {
  return prismicClient.getSingle("homepage")
    .then(document => {
      const data = document.data;
      return {
        status: "ok",
        title: RichText.asText(data.title),
        description: RichText.asText(data.description),
        reactjsLogo: data.reactjs_logo,
        prismicLogo: data.prismic_logo,
        featuresIntro: RichText.asText(data.features_intro),
        features: data.body.map(slice => ({
          name: RichText.asText(slice.primary.feature_name),
          description: RichText.asText(slice.primary.feature_description)
        }))
      };
    })
    .catch(error => buildErrorObject(error));
}

export const prismicQueries = {
  getHomePage
};
