import axios from "axios";
import xhrAdapter from "axios/lib/adapters/xhr";
import Config from "../util/Constants";

const httpInstance = axios.create({
  adapter: xhrAdapter,
  baseURL: Config.BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key": `$2b$10$WrRCMMFKq488AGbY55dy0OawUwz.sxJp6qVbfIAL1tXfhFsG6VPo.`,
  },
  data: "",
});

httpInstance.interceptors.request.use((config) => {
  const params = config.params || {};

  return {
    ...config,
    params: {
      _: new Date().getTime(),
      ...params,
    },
  };
});

const httpData = {
  httpInstance,
  get: httpInstance.get,
  post: httpInstance.post,
  put: httpInstance.put,
  delete: httpInstance.delete,
  patch: httpInstance.patch,
};
export default httpData;
