import * as types from './search-action-types';
import { axiosInstance } from '../../../config/axios';

const API_KEY = '540ae0350b2b2b29fea22a8a8552135e';

function searchMoviesRequest(term: string) {
  return {
    type: types.SEARCH_MOVIES_REQUEST
  };
}

function searchMoviesSuccess(response: any) {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    payload: response.data
  };
}

function searchMoviesFailure(error: any) {
  return {
    type: types.SEARCH_MOVIES_FAIL,
    payload: error
  };
}

function searchTvShowsRequest(term: string) {
  return {
    type: types.SEARCH_TV_SHOWS_REQUEST
  };
}

function searchTvShowsSuccess(response: any) {
  return {
    type: types.SEARCH_TV_SHOWS_SUCCESS,
    payload: response.data
  };
}

function searchTvShowsFailure(error: any) {
  return {
    type: types.SEARCH_TV_SHOWS_FAIL,
    payload: error
  };
}

export function searchMoviesFunction(term: string) {
  return async (dispatch: any) => {
    dispatch(searchMoviesRequest(term));
    try {
      const url = `/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${term}`;
      const response = await axiosInstance.get(url);
      dispatch(searchMoviesSuccess(response));
    } catch (error) {

      dispatch(searchMoviesFailure(error.message));
    }
  };
}

export function searchTvShowsFunction(term: string) {
  return async (dispatch: any) => {
    dispatch(searchTvShowsRequest(term));
    try {
      const url = `/search/tv?api_key=${API_KEY}&language=en-US&query=${term}`;
      const response = await axiosInstance.get(url);
      dispatch(searchTvShowsSuccess(response));
    } catch (error) {

      dispatch(searchTvShowsFailure(error.message));
    }
  };
}