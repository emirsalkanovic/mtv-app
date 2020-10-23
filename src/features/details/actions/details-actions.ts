import * as types from './details-action-types';
import { axiosInstance } from '../../../config/axios';

const API_KEY = '540ae0350b2b2b29fea22a8a8552135e';

function getVideoRequest(id: any) {
  return {
    type: types.GET_DETAILS_VIDEO
  };
}

function getVideoRequestSuccess(response: any) {
  return {
    type: types.GET_DETAILS_VIDEO_SUCCESS,
    payload: response.data
  };
}

function getVideoRequestFailure(error: any) {
  return {
    type: types.GET_DETAILS_VIDEO_FAIL,
    payload: error
  };
}

export function getVideo(id: any, selectedTab: string) {
  let typeOfVideo = '';
  if (selectedTab === 'tvShows') {
    typeOfVideo = 'tv';
  } else {
    typeOfVideo = 'movie'
  }
  return async (dispatch: any) => {
    dispatch(getVideoRequest(id));
    try {
      const url = `/${typeOfVideo}/${id}/videos?api_key=${API_KEY}`;
      const response = await axiosInstance.get(url);
      dispatch(getVideoRequestSuccess(response));
    } catch (error) {

      dispatch(getVideoRequestFailure(error.message));
    }
  };
}
