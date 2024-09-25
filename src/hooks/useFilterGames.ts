import { Game } from "../types/types";

const useFilterGames = (games: Game[], searchTerm: string) => {
  return games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.providerName.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default useFilterGames;