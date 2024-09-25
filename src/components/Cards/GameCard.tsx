import { Link } from "react-router-dom";
import { Game } from "../../types/types";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md min-w-full sm:min-w-[22rem] max-w-full sm:max-w-[22rem] lg:min-w-0 lg:max-w-[20rem] relative mx-auto my-7">
      <img
        className="rounded-t-md h-60 w-full object-cover shadow-lg mb-8 min-w-full sm:min-w-[22rem]
          md:min-w-[20rem]"
        src={game?.thumb?.url ?? ''}
        alt={game?.slug}
      />
      <div className="px-5 pb-4">
        <div className="h-8">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
            {game?.title}
          </h3>
        </div>
        <div className="flex items-center h-12">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {game?.providerName}
          </span>
        </div>
        <div className="flex justify-end">
          <Link to={`/game/${game?.slug}`}>
            <button className="hover:bg-gray-700 py-3 px-6 text-center font-semibold bg-black text-white rounded-md ml-8">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;