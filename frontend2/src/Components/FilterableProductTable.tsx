import { ChangeEvent, useEffect, useState } from 'react';
import RecommenderTable, { Recommender } from './ProductTable';

type SearchProps = {
  readonly filterText: string;
  readonly handleFilterTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({
  filterText,
  handleFilterTextChange,
}: SearchProps) => (
  <form className = "search-bar">
        <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
        className = "search-text"
        />
  </form>
);

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState('');
  const [recommenders, setRecommenders] = useState<Recommender[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/getRecommenders')
      .then((res) => res.json())
      .then((data) => {
        setRecommenders(data);
        console.log(data);
      });
  }, []);

  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      <RecommenderTable
        recommenders={recommenders}
        filterText={filterText}
      />
    </div>
  );
};

export default FilterableProductTable;