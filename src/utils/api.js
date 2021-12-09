import axios from "axios";

const BASE_URL = process.env.API_URL;

const logRequests = () => {
  return (
    process.env.NODE_ENV === "development" &&
    (axios.interceptors.request.use((request) => {
      return request;
    }),
    axios.interceptors.response.use((response) => {
      return response;
    }))
  );
};

logRequests();


const customAxios = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
        "Access-Control-Allow-Credentials": true,
    },
});

export async function apiRequest(
  path,
  method = "GET",
  data,
  params,
  shouldNotReload,  
) {
  const { CancelToken } = axios;
  const source = CancelToken.source();

  try {
    const response = await customAxios.request({
      url: `${BASE_URL}${path}`,
      method,
      params: {
        ...params,
      },
      cancelToken: source.token,
      data,
    });

    const {
      data: { message },
    } = response;
    return {
      status: true,
      data: response.data,
      message,
    };
  } catch (err) {
    if (
      err.response?.status === 401 &&
      !shouldNotReload &&
      path !== "/account/login"
    ) {
      console.log({
        status: "error",
        desciption: "Session Expired, please login again.",
        title: "Error",
      });
      return window.location.reload();
    }
    return {
      status: false,
      message: err.response?.data?.message || err.message,
      err,
      code: err.response?.status,
    };
  }
}