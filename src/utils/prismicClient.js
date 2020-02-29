import Prismic from "prismic-javascript";
// import { apiEndpoint, accessToken, linkResolver } from '../prismic-configuration';
import { apiEndpoint, accessToken } from "../secret_config";

// Client method to query documents from the Prismic repo
export const prismicClient = Prismic.client(apiEndpoint, { accessToken });
