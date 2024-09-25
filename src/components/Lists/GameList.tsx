import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import useFetchGames from '../../hooks/useFetchGames';
import useFilterGames from '../../hooks/useFilterGames';
import GameGrid from '../Grids/GameGrid';
import NoGamesFound from '../../helpers/NoGamesFound';


const GameList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const games = useFetchGames();
  const filteredGames = useFilterGames(games, searchTerm);

  return (
    <div className='flex flex-col' >
      <SearchBar onSearch={handleSearch} />
      {filteredGames.length > 0 ? <GameGrid games={filteredGames} /> : <NoGamesFound />}
    </div>
  );
};

export default GameList;