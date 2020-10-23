import React, { Dispatch, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { LoadingScreen } from '../../../components/LoadingScreen';
import { getTopMoivesRequest, getTopTvShowsRequest } from '../actions/top-10-actions';
import { TopTenTvShowsScreen } from './TopTenScreen';

type TvShowProps = {
  selectedTab: string,
  onSelect: (data: any) => void
}

const TvShowScreen: React.FC<TvShowProps> = (props: TvShowProps) => {

  const movies: any = useSelector(
    (state: any) => state.movies.results.results,
    shallowEqual
  );

  const tvShows: any = useSelector(
    (state: any) => state.tvShows.results.results,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const getMovies = React.useCallback(
    () => dispatch(getTopMoivesRequest()),
    [dispatch]
  );

  const getTvShows = React.useCallback(
    () => dispatch(getTopTvShowsRequest()),
    [dispatch]
  );

  useEffect(() => {
    if (props.selectedTab === 'tvShows') {
      getTvShows()
    } else {
      getMovies()
    }
  }, [props.selectedTab])

  const renderContent = () => {
    if (props.selectedTab === 'tvShows') {
      if (!tvShows) {
        return (
          <LoadingScreen />
        );
      } else {
        return (
          <TopTenTvShowsScreen
            onSelect={props.onSelect}
            data={tvShows}
            title='TV Shows'
          />
        );
      }
    } else {
      if (!movies) {
        return (
          <LoadingScreen />
        );
      } else {
        return (
          <TopTenTvShowsScreen
            onSelect={props.onSelect}
            data={movies}
            title='Movies'
          />
        );
      }
    }
  }
  return (
    <div>
      { renderContent()}
    </div>

  );
}

export default TvShowScreen;
