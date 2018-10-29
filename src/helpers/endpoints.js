// Define endpoints
const endpoints = {
  stories: {
    get: {
      segment: "stories",
      type: "GET"
    },
    post: {
      segment: "stories",
      type: "POST"
    }
  },
  login: {
    post: {
      segment: "login",
      type: "POST"
    }
  }
};

export let conf = {
  apiBaseUrl: "https://api-quilt.swaco.io/api/",
  endpoints
};

if (process.env.REACT_APP_ENV === "development") {
  conf = {
    apiBaseUrl: "http://localhost:3001/api/",
    endpoints
  };
}
