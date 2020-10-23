import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import { topMoviesReducer, topTvShowsReducer } from '../features/tvShows/reducers/top-10-reducer';
import { searchMoviesReducer, searchTvShowsReducer } from '../features/search/reducers/search-reducer';
import { getVideosReducer } from '../features/details/reducer/details-reducer';

export default function configureStore() {
  const initialState = {};
  const middleware = applyMiddleware(ReduxThunk);

  const reducers = combineReducers({
    movies: topMoviesReducer,
    tvShows: topTvShowsReducer,
    searchMovies: searchMoviesReducer,
    searchTvShows: searchTvShowsReducer,
    videos: getVideosReducer
  });

  return createStore(reducers, initialState, middleware);
}