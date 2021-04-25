import React, {useState} from 'react';
import MaterialButton from '../MaterialButton/MaterialButton'
import './search.scss';

function Search({value, onSearch}) {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    if (showSearch) {
      onSearch('');
    }
    setShowSearch(!showSearch);
  }

  const handleSearchInput = (evt) => {
    onSearch(evt.target.value)
  }

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        className={`search__input ${showSearch && 'search__input_active'}`}
        value={value}
        onChange={handleSearchInput}
        placeholder="Search By Name..."
      />
      <MaterialButton type="search" handleClick={handleSearchClick} />
    </div>
  );
}

export default Search;