import * as types from '../actions/details-action-types';

const INITIAL_STATE_VIDEOS = {
  isLoading: false,
  results: []
}

export function getVideosReducer(state = INITIAL_STATE_VIDEOS, action: any) {
  switch (action.type) {
    case types.GET_DETAILS_VIDEO:
      return {
        ...state,
        isLoading: true,
        results: [],
      };
    case types.GET_DETAILS_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      };
    case types.GET_DETAILS_VIDEO_FAIL:
      return { ...state, isLoading: false, error: 'Error while trying to fetch videos' };
    default:
      return state;
  }
}