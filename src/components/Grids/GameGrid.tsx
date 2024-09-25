import GameCard from '../Cards/GameCard';
import { Game } from '../../types/types';

interface GameGridProps {
  games: Game[];
}

const GameGrid = ({ games }: GameGridProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-14 justify-items-center ml-8">
    {games.map(game => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
);

export default GameGrid;