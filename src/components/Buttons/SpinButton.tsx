import { SpinButtonProps } from "../../types/types";

const SpinButton = ({ handleSpin, disabled }: SpinButtonProps) => {
  return (
    <button
      onClick={handleSpin}
      disabled={disabled}
      className="px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-gray-700 disabled:opacity-50 font-semibold"
    >
      Spin
    </button>
  );
};

export default SpinButton;
