import React from 'react';
import { LoadingScreen } from '../../../components/LoadingScreen';
import '../style/search-results-style.css';

type SearchResultsScreenProps = {
  title: string,
  data: [],
  onSelect: (data: any) => void,
}

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = (props: React.PropsWithChildren<SearchResultsScreenProps>) => {
  return (
    <div className='searchResultsContainer'>
      {!props.data ?
        <LoadingScreen />
        :
        <div>
          <div className='searchResultsHeaderHolder'>
            <p className='searchResultsHeader'>Search {props.title} results: </p>
          </div>
          <div className='searchResultsMainHolder'>
            {props.data.length > 0 ? props.data.map((item: any, index: number) => {
              return (
                <div key={index} className='searchResultsSingleItem' onClick={() => props.onSelect(item)}>
                  <div className='searchResultsSingleItemInnerHolder'>
                    <div className='searchResultsSingleImageHolder'>
                      <img
                        className='searchResultsPosterImg'
                        src={item.poster_path ? `http://image.tmdb.org/t/p/w185/${item.poster_path}` : './no-image.png'}
                        key={item.id}
                        alt='cover'
                      />
                    </div>
                    <p className='searchResultsTitle'>{item.title || item.name}</p>
                    <p className='searchResultsRating'>{item.vote_average}</p>
                  </div>
                </div>
              );
            }) :
              <div className='searchResultsNoResultsHolder'>
                <p className='noResultsText'>No Results</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
}