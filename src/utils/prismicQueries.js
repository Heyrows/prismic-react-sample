import { RichText } from "prismic-reactjs";
import { prismicClient } from "./prismicClient";

/*
* In this file, we get content from Prismic and parse it.
* This way, the react components are easier to understand
*/

async function getHomePage() {
  return prismicClient.getSingle("homepage")
    .then(document => {
      const data = document.data;
      return {
        title: RichText.asText(data.title),
        description: RichText.asText(data.description),
        features: data.body.map(slice => {
          return {
            name: RichText.asText(slice.primary.feature_name),
            description: RichText.asText(slice.primary.feature_description)
          };
        })
      };
    })
    .catch(error => error);
}

export const prismicQueries = {
  getHomePage
};
