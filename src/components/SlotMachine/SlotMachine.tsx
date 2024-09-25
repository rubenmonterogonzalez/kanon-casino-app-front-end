import { useSlotMachine } from "../../hooks/useSlotMachine";
import SpinButton from "../Buttons/SpinButton";
import Reel from "../Reel/Reel";

const SlotMachine = () => {
  const { coins, spinResult, winAmount, handleSpin, loading } = useSlotMachine();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Slot Machine</h2>
        <p className="text-gray-700 mb-2">Coins: {coins}</p>
        <p className="text-green-500 mb-2">Last Win: {winAmount} coins</p>

        {loading ? (
          <div className="text-center py-4">
            <div className="loader border-t-4 border-b-4 border-blue-500 w-4 h-4 rounded-full animate-spin mx-auto mb-4"></div>
            <p>Spinning...</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4 text-xl font-bold mb-6">
            <Reel symbol={spinResult?.reel1 || "lemon"} /> {/* Show backend spin result */}
            <Reel symbol={spinResult?.reel2 || "lemon"} />
            <Reel symbol={spinResult?.reel3 || "lemon"} />
          </div>
        )}

        <SpinButton handleSpin={handleSpin} disabled={coins <= 0 || loading} />
      </div>
    </div>
  );
};

export default SlotMachine;
