import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {

  const onSerchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let term: string = e.target.value;
    if (term.trim() === '') {
      props.onSearch(term.trim());
    } else {
      props.onSearch(term);
    }
  };

  return (
    <div className='searchFieldContainer'>
      <FontAwesomeIcon className='searchIcon' icon={faSearch} />
      <input
        className='searchField'
        type='text'
        placeholder='Search'
        value={props.searchTerm}
        onChange={(term: React.ChangeEvent<HTMLInputElement>) => onSerchTermChange(term)}
      />
    </div>
  );
};
