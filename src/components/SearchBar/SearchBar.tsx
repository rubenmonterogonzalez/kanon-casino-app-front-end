import React, { useState } from 'react';
import { SearchBarProps } from '../../types/types';

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search games..."
      value={searchTerm}
      onChange={handleSearch}
      className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-1/4 m-auto"
    />
  );
};

export default SearchBar;