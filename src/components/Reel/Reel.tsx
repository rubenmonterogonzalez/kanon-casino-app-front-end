import cherry from '../../assets/fruit/cherry.png';
import lemon from "../../assets/fruit/lemon.png";
import apple from "../../assets/fruit/apple.png";
import banana from "../../assets/fruit/banana.png";
import { Fruit } from "../../types/types";

interface ReelProps {
  symbol: Fruit;
}

const fruitImages: Record<Fruit, string> = {
  cherry,
  lemon,
  apple,
  banana,
};

const Reel = ({ symbol }: ReelProps) => {
  return (
    <div className="reel">
      <img
        src={fruitImages[symbol]}
        alt={symbol}
        className="w-16 h-16 mx-auto"
      />
    </div>
  );
};

export default Reel;
