import axios, { AxiosError } from "axios";
import { toastError } from "./common";
import { clearAuth, getToken } from "../entities/auth.entity";
import { baseUrl } from "./config";

type MethodTypes = "get" | "post" | "put" | "patch" | "delete";

interface IRequestApiData {
  method?: MethodTypes;
  path: string;
  body?: any;
  headers?: any;
  params?: any;
}

export const fetchFromApi = async ({ method = "get", path, body, headers = {}, params }: IRequestApiData) => {
  const token = getToken();
  console.log("token", token);

  const url = `${baseUrl}${path}`;

  console.log({ baseUrl, url });

  const requestConfig: {
    url: string;

    method: MethodTypes;

    data?: any;

    headers?: {
      Authorization?: string;
      Accept?: string;
      "Content-Type"?: string;
    };
    params?: any;
  } = {
    url,

    method,
  };

  if (method !== "get" && body) requestConfig.data = body;
  requestConfig.headers = {};
  if (token) requestConfig.headers = { Authorization: token };

  if (params) requestConfig.params = params;

  if (headers)
    requestConfig.headers = {
      ...requestConfig.headers,
      ...headers,
    };

  console.log("requestConfig", requestConfig);
  return axios(requestConfig);
};

export const handleFetchError = (err: any, key?: any) => {
  if (err.response?.data) {
    console.log(err.response);
    // if (typeof err.response.data.message === "string")
    //   toastError(err.response.data.message);
    // else {
    toastError(err.response.data.message ?? "Error making Request");
    // }
    if (
      err.response.data.message === "Session expired, please login again" ||
      err.response.data.message === "Authentication expired, login again please"
    ) {
      clearAuth();
    }
  }
};

export function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError === true;
}
