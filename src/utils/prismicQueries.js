import { RichText } from "prismic-reactjs";
import qs from "qs";
import { prismicClient, getRepeatableType } from "./prismicClient";
import { linkResolver } from "../prismic-configuration";

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

/*
** This Function fetches all the integration field products that are associated to the custom type if_games
*/

async function getIntegrationFieldProducts() {
  return getRepeatableType("if_games").then(documents => ({
    status: "ok",
    products: documents.results.map(product => product.data.game)
  }));
}

/*
** This function fetches the ToolbarInfo content and build the data to display
*/
async function getToolbarInfoPage() {
  const pToolbarInfo = prismicClient.getSingle("toolbar_info");
  const pPreviewExample = prismicClient.getSingle("preview_example");

  return Promise.all([pToolbarInfo, pPreviewExample])
    .then(([toolbarDoc, previewExampleDoc]) => {
      const toolbarInfoData = toolbarDoc.data;
      const previewExampleData = previewExampleDoc.data;

      return {
        status: "ok",
        toolbarTitle: RichText.asText(toolbarInfoData.title),
        toolbarDescription: RichText.asText(toolbarInfoData.description),
        toolbarScreenshot: toolbarInfoData.toolbar_screenshot,
        previewTitle: RichText.asText(previewExampleData.title),
        previewDescription: RichText.asText(previewExampleData.description)
      };
    })
    .catch(error => buildErrorObject(error));
}

/*
** This function retrieve the right url for the preview
*/
async function previewSession(history, location) {
  const params = qs.parse(location.search.slice(1));
  if (!params.token) {
    return console.error(`Unable to retrieve the session token from provided url. \n
    Check https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature for more info`);
  }

  // Retrieve the correct URL for the document being previewed.
  // Once fetched, redirect to the given url
  prismicClient.previewSession(params.token, linkResolver, "/previews")
    .then(url => history.push(url));
}

export const prismicQueries = {
  getHomePage,
  getToolbarInfoPage,
  previewSession,
  getIntegrationFieldProducts,
};
