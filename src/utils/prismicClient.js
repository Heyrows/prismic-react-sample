import Prismic from "prismic-javascript";
// import { apiEndpoint, accessToken, linkResolver } from '../prismic-configuration';
import { apiEndpoint, accessToken } from "../secret_config";

// Client method to query documents from the Prismic repo
export const prismicClient = Prismic.client(apiEndpoint, { accessToken });

// Fetches all the document that correspond to this custom type
export const getRepeatableType = customTypeId => prismicClient.query(Prismic.Predicates.at("document.type", customTypeId));
