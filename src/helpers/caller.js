import { conf } from './endpoints';

const assemble = (literal, urlParams = {}) =>
  literal == null
    ? null
    : literal.replace(/\${(\w+)}/g, (_, v) => urlParams[v] || "");

export const makeCall = ({ call, params = {}, urlParams, authUrl }) => {
  const jobConf = conf.endpoints[call.section][call.job];

  let endpointUrl = conf.apiBaseUrl + assemble(jobConf.segment, urlParams);
  const requestObject = {
    headers: {
      "Content-type": "application/json"
    },
    method: jobConf.type
  };
  if (authUrl) {
    requestObject.credentials = "include";
  }

  if (jobConf.type !== "GET") {
    requestObject.body = JSON.stringify(params);
  } else if (Object.keys(params).length !== 0) {
    endpointUrl += "?";
    Object.entries(params).forEach(([key, value]) => {
      if (value != null) {
        endpointUrl += key + "=" + value + "&";
      }
    });
  }

  return fetch(endpointUrl, requestObject)
    .then(
      async response =>
        response.ok
          ? {
              data: await response.json(),
              pagination: await JSON.parse(
                response.headers.get("X-Pagination") ||
                  response.headers.get("x-pagination") ||
                  "{}"
              )
            }
          : Promise.reject(response.statusText)
    )
    .catch(error => {
      // tslint:disable-next-line:no-console
      console.error(error);
      return Promise.reject(error);
    });
};
