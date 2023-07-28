import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { StringList } from './StringList';

type ListProps = {
  list: string[];
};

export default function SearchableList({ list }: ListProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      <StringList list={list} searchTerm={searchTerm} />
    </div>
  );
}
