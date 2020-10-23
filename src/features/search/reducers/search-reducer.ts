import * as types from '../actions/search-action-types';

const INITIAL_STATE_SEARCH_MOVIES = {
  isLoading: false,
  results: []
}

export function searchMoviesReducer(state = INITIAL_STATE_SEARCH_MOVIES, action: any) {
  switch (action.type) {
    case types.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        results: [],
      };
    case types.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      };
    case types.SEARCH_MOVIES_FAIL:
      return { ...state, isLoading: false, error: 'Error while trying to fetch movies' };
    default:
      return state;
  }
}

const INITIAL_STATE_SEARCH_TV_SHOWS = {
  isLoading: false,
  results: []
}

export function searchTvShowsReducer(state = INITIAL_STATE_SEARCH_TV_SHOWS, action: any) {
  switch (action.type) {
    case types.SEARCH_TV_SHOWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        results: [],
      };
    case types.SEARCH_TV_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      };
    case types.SEARCH_TV_SHOWS_FAIL:
      return { ...state, isLoading: false, error: 'Error while trying to fetch movies' };
    default:
      return state;
  }
}