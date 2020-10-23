import React, { Dispatch, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { SearchBar } from './components/SearchBar';
import { TabField } from './components/TabField';
import './App.css'
import TvShowScreen from './features/top-ten/components/TvShowScreen';
import { searchTvShowsFunction, searchMoviesFunction } from './features/search/actions/search-actions';
import { SearchResultsScreen } from './features/search/components/SearchResultsScreen';
import { DetailsScreen } from './features/details/components/DetailsScreen';

interface State {
  selectedTab: string;
  searching: boolean;
  searchTerm: string;
}

function App() {
  const [selectedTab, setSelectedTab] = useState('tvShows');
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState();
  const [openDetails, setOpenDetails] = useState(false);

  const moviesResult: any = useSelector(
    (state: any) => state.searchMovies.results.results,
    shallowEqual
  );

  const tvShowResult: any = useSelector(
    (state: any) => state.searchTvShows.results.results,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const searchMovies: any = React.useCallback(
    (searchTerm: string) => dispatch(searchMoviesFunction(searchTerm)),
    [dispatch]
  );

  const searchTvShows: any = React.useCallback(
    (searchTerm: string) => dispatch(searchTvShowsFunction(searchTerm)),
    [dispatch]
  );

  const onTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const searchFunction = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const onItemSelect = (item: any) => {
    setSelectedItem(item);
    setOpenDetails(true);
  };

  const closeDetailsModule = () => {
    setOpenDetails(false);
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      setSearching(true);
      if (selectedTab === 'tvShows') {
        const timeoutId = setTimeout(() => searchTvShows(searchTerm)
          , 1000
        );
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => searchMovies(searchTerm)
          , 1000
        );
        return () => clearTimeout(timeoutId);
      }
    } if (searchTerm.length > 0 && searching) {
      if (selectedTab === 'tvShows') {
        const timeoutId = setTimeout(() => searchTvShows(searchTerm)
          , 1000
        );
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => searchMovies(searchTerm)
          , 1000
        );
        return () => clearTimeout(timeoutId);
      }
    } else {
      setSearching(false);
    }
  }, [searchTerm, selectedTab]);

  return (
    <div className="App">
      {openDetails ?
        <DetailsScreen
          selectedData={selectedItem}
          closeModal={closeDetailsModule}
          selectedTab={selectedTab}
        />
        : null}
      <div className='tabHolder'>
        <div className={selectedTab === 'movies' ? 'singleTabHolderActive' : 'singleTabHolder'} onClick={() => onTabClick('movies')}>
          <TabField title='Movies' selected={selectedTab} value='movies' />
        </div>
        <div className={selectedTab === 'movies' ? 'singleTabHolder' : 'singleTabHolderActive'} onClick={() => onTabClick('tvShows')}>
          <TabField title='Tv Shows' selected={selectedTab} value='tvShows' />
        </div>
      </div>
      <div className='searchBarHolder'>
        <SearchBar searchTerm={searchTerm} onSearch={searchFunction} />
      </div>
      {searching ?
        <SearchResultsScreen
          onSelect={onItemSelect}
          title={selectedTab === 'tvShows' ? 'TV Shows' : 'Movies'}
          data={selectedTab === 'tvShows' ? tvShowResult : moviesResult}
        />
        :
        <TvShowScreen onSelect={onItemSelect} selectedTab={selectedTab} />
      }
    </div>
  );
}

export default App;
