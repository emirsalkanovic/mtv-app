import * as types from '../actions/top-10-action-types';

const INITIAL_STATE_TOP_MOVIES = {
  isLoading: false,
  results: []
}

export function topMoviesReducer(state = INITIAL_STATE_TOP_MOVIES, action: any) {
  switch (action.type) {
    case types.GET_TOP_10_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        results: [],
      };
    case types.GET_TOP_10_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      };
    case types.GET_TOP_10_MOVIES_FAIL:
      return { ...state, isLoading: false, error: 'Error while trying to fetch movies' };
    default:
      return state;
  }
}

const INITIAL_STATE_TOP_TVSHOWS = {
  isLoading: false,
  results: []
}

export function topTvShowsReducer(state = INITIAL_STATE_TOP_TVSHOWS, action: any) {
  switch (action.type) {
    case types.GET_TOP_10_TV_SHOWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        results: [],
      };
    case types.GET_TOP_10_TV_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      };
    case types.GET_TOP_10_TV_SHOWS_FAIL:
      return { ...state, isLoading: false, error: 'Error while trying to fetch TV Shows' };
    default:
      return state;
  }
}