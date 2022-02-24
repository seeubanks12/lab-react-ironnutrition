import { Divider, Input } from 'antd';
import React from 'react';

const Search = (props) => {
  const [searchInput, setSearchInput] = React.useState('');

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    props.handleSearch(e.target.value.toLowerCase());
  };

  return (
      <form>
          <Divider>Search</Divider>
          <Input type ="text" name="searchInput"
          value={searchInput}
          onChange={handleSearchInput} />
      </form>
  )
};

export default Search;