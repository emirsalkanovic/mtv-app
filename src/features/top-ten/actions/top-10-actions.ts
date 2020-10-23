import * as types from './top-10-action-types';
import { axiosInstance } from '../../../config/axios';

const API_KEY = '540ae0350b2b2b29fea22a8a8552135e';

function topMoivesRequest() {
  return {
    type: types.GET_TOP_10_MOVIES_REQUEST
  };
}

function getTopMoivesSuccess(response: any) {
  return {
    type: types.GET_TOP_10_MOVIES_SUCCESS,
    payload: response.data
  };
}

function getTopMoviesFailure(error: any) {
  return {
    type: types.GET_TOP_10_MOVIES_FAIL,
    payload: error
  };
}

function topTvShowsRequest() {
  return {
    type: types.GET_TOP_10_TV_SHOWS_REQUEST
  };
}

function getTopTvShowsSuccess(response: any) {
  return {
    type: types.GET_TOP_10_TV_SHOWS_SUCCESS,
    payload: response.data
  };
}

function getTopTvShowsFailure(error: any) {
  return {
    type: types.GET_TOP_10_TV_SHOWS_FAIL,
    payload: error
  };
}

export function getTopMoivesRequest() {
  return async (dispatch: any) => {
    dispatch(topMoivesRequest());
    try {
      const url = `/movie/top_rated?page=1&language=en-US&api_key=${API_KEY}`;
      const response = await axiosInstance.get(url);
      dispatch(getTopMoivesSuccess(response));
    } catch (error) {

      dispatch(getTopMoviesFailure(error.message));
    }
  };
}

export function getTopTvShowsRequest() {
  return async (dispatch: any) => {
    dispatch(topTvShowsRequest());
    try {
      const url = `/tv/top_rated?page=1&language=en-US&api_key=${API_KEY}`;
      const response = await axiosInstance.get(url);
      dispatch(getTopTvShowsSuccess(response));
    } catch (error) {

      dispatch(getTopTvShowsFailure(error.message));
    }
  };
}