// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = "https://your-repo-name.cdn.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = "";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = doc => {
  if (doc.type === "homepage") return "/";
  if (doc.type === "toolbar_info") return "/toolbarInfo";
  if (doc.type === "preview_example") return "/toolbarInfo";
  if (doc.type === "if_games") return "/IF-products";
  return "/previews";
};
