import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const AxiosInterceptors = {
  responseInterceptor() {
    axiosInstance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }
};
