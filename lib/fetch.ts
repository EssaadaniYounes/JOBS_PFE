// import axios, { AxiosHeaders, AxiosRequestHeaders, AxiosResponse } from 'axios';

import axios, {
  AxiosHeaders,
  AxiosRequestHeaders,
  RawAxiosRequestHeaders,
} from 'axios';

class Fetch {
  static readonly API_URL = process.env.NEXT_PUBLIC_API_URL;

  public static async getAll(url: string, headers?: HeadersInit) {
    const response = await fetch(Fetch.API_URL + url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',

      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    const data = await response.json();
    return [];
  }
  public static async getAllAxios(
    url: string,
    headers?: AxiosHeaders | RawAxiosRequestHeaders,
  ) {
    const response = await axios(Fetch.API_URL + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
    });
    return response.data;
  }

  public static async post(
    url: string,
    data: any,
    headers?: AxiosHeaders | RawAxiosRequestHeaders,
  ) {
    const res = await axios({
      method: 'POST',
      url: Fetch.API_URL + url,
      headers: {
        Accept: 'application/json',

        ...headers,
      },
      data,
    });
    return res.data;
  }

  public static async put(url: string, data: any, headers?: AxiosHeaders) {
    const res = await axios({
      method: 'PUT',
      url: Fetch.API_URL + url,
      headers: {
        Accept: 'application/json',
        ...headers,
      },
      data,
    });
    return res;
  }

  public static async delete(url: string, headers?: AxiosHeaders) {
    const res = await axios({
      method: 'DELETE',
      url: Fetch.API_URL + url,
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    });
    return res.data;
  }
}

export default Fetch;
