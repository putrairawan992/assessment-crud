/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Error } from '../error/error';
// import Utils from '../../utils/utils';

/**
 * Handles axios http with interceptor
 *
 */
const HttpService = () => {
  const baseURL: string = 'https://cms-admin-v2.ihsansolusi.co.id/';
  const retryDelay = 1000;
  const maxRetry = 3;
  let retryCount = maxRetry;
  const errorHandler = Error();
  // const util = Utils();
  const isServer = typeof window === 'undefined';

  // instantiate axios
  const _instance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER}`
    }
  });
  // const _instance: AxiosInstance = axios.create();

  // _instance.defaults.headers.common.transactionId = util.generateId();
  _instance.defaults.headers.common['user-agent'] = typeof window !== 'undefined' ? navigator.userAgent : '';

  _instance.interceptors.response.use(
    // success response
    (response) => response,
    // error response
    (error) => handleResponse(error)
  );

  /**
   * Get the axios instance
   *
   * @returns { AxiosInstance } Returns the axios instance and use get, delete, post, put, and other methods.
   */
  function instance(): AxiosInstance {
    return _instance;
  }

  /**
   * Private method which handles retry mechanism
   *
   * @param   { number }    milliseconds    Contains the delay to execute the request again
   * @param   { Object }    error    Contains error object
   * @returns { Object } Promise either resolve or rejected
   */
  function retryRequest(milliseconds: number, error: any): object {
    return new Promise((resolve, reject) => {
      if (retryCount - 1 > 0) {
        setTimeout(() => resolve(_instance(error.config)), milliseconds);
        retryCount -= 1;
      } else {
        retryCount = maxRetry;
        if (!isServer) errorHandler.handleComponentBaseError(error.response);
        reject(error.response);
      }
    });
  }

  /**
   * Private method which handles error response and implement retry mechanism for 429 (cosmos rate limit) error
   *
   * @param   { Object }    error    Contains the error object
   * @returns { Object } Promise either resolve or rejected
   */
  function handleResponse(error: any): object {
    const status = error.response ? error.response.status : null;
    if (status === 429) {
      return retryRequest(retryDelay, error);
    }

    if (!isServer) errorHandler.handleComponentBaseError(error.response);
    return Promise.reject(error.response);
  }

  /**
   * Public method which handles the default authorization header
   *
   * @param   { string }    token    Contains the token value
   */
  function setDefaultToken(token: string) {
    _instance.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_BEARER}`;
  }

  /**
   * Public method which handles the default userId header
   *
   * @param   { string } userId    Contains the userId value
   */
  function setDefaultUserId(userId: string) {
    _instance.defaults.headers.common.userId = userId;
  }

  function get(url: string, params?: AxiosRequestConfig & any) {
    return _instance.get(url, params);
  }

  function post(url: string, data?: any, config?: AxiosRequestConfig<any> & any) {
    return _instance.post(url, data, config);
  }

  function put(url: string, data?: any, config?: AxiosRequestConfig<any> & any) {
    return _instance.put(url, data, config);
  }

  function del(url: string, config?: AxiosRequestConfig<any>) {
    return _instance.delete(url, config);
  }

  return {
    instance,
    retryRequest,
    handleResponse,
    setDefaultToken,
    setDefaultUserId,
    get,
    post,
    put,
    del,
  };
};

const httpService = HttpService();
export { httpService };
