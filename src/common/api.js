import React from 'react';
import { message } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ROUTES, TOKEN } from './constants';

const api = axios?.create({
  baseURL: 'https://91ae-49-36-217-214.in.ngrok.io/',
  headers: {
    // eslint-disable-next-line no-undef
    authorization: `Bearer ${localStorage?.getItem(TOKEN)}`
  }
});

export const AxiosInterceptor = () => {
  const history = useHistory();
  const toast = ({ message: content, type }) => {
    message?.destroy();
    switch (type) {
      case 'info':
        message?.info(content);
        break;
      case 'success':
        message?.success(content);
        break;
      case 'warning':
        message?.warning(content);
        break;
      case 'error':
        message?.error(content);
        break;
      default:
        break;
    }
  };

  api?.interceptors?.request?.use(
    function (config) {
      // config.headers.Accept = 'application/json';
      // config.headers.testkey = 'randomdata';

      // config.data = { ...config.data, myCommonBody };
      // eslint-disable-next-line no-console
      return config;
    },
    function (err) {
      return Promise?.reject(err);
    }
  );

  api?.interceptors?.response?.use(
    (response) => {
      toast({
        message: response?.data?.message || 'Operation successful',
        type: response?.status === 'ERROR' ? 'error' : 'success'
      });
      return response;
    },
    (error) => {
      toast({
        message: error?.response?.data?.error || 'Something went wrong',
        type: 'error'
      });
      if (error?.response?.status === 401) {
        history?.push(ROUTES?.LOGIN);
      }
    }
  );
  return <div />;
};

export default api;
