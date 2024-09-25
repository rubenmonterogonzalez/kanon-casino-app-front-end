import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, SpinResult } from '../types/types';
import { setCoins } from '../store/slots/coinSlice';

export const useSlotMachine = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.coin.coins); // Get coins from Redux store
  const [spinResult, setSpinResult] = useState<SpinResult | null>(null); // Spin result from backend
  const [winAmount, setWinAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/slots/coins`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          dispatch(setCoins(data.coins)); // Set coins in Redux
        } else {
          console.error('Failed to fetch coins');
        }
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };

    fetchCoins();
  }, [dispatch]);

  const handleSpin = async () => {
    if (coins <= 0) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/slots/spin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Use token if needed
        },
        body: JSON.stringify({ coins }), // Send current coins count
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setSpinResult({
          reel1: data.spinResult[0],
          reel2: data.spinResult[1],
          reel3: data.spinResult[2],
        });
        setWinAmount(data.winAmount);
        dispatch(setCoins(data.coins)); // Update Redux with the new coins count from backend
      } else {
        console.error('Failed to spin the slot machine', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during spin:', error);
    }
    setLoading(false);
  };

  return {
    coins,
    spinResult,
    winAmount,
    handleSpin,
    loading,
  };
};
