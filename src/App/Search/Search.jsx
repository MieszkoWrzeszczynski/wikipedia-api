import './Search.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const Search = ({
  setSearchPhrase = () => { },
  onSearch = () => { },
  searchPhrase = ''
}) => {
  return (
    <div className="search__container">
      <Input
        label="Search phrase"
        value={searchPhrase}
        onChange={setSearchPhrase}
      />
      <Button
        text="Search"
        onClick={onSearch}
      />
    </div>
  )
}

Search.propTypes = {
  setSearchPhrase: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchPhrase: PropTypes.string.isRequired,
  withDebounce: PropTypes.bool
};

export default Search;
