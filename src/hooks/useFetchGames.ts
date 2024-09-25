import { useEffect, useState } from 'react';
import { Game } from '../types/types';

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/games/games`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchGames();
  }, []);

  return games;
};

export default useFetchGames;