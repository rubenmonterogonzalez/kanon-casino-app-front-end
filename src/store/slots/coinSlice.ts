import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinState } from '../../types/types';

const initialState: CoinState = {
  coins: 20,
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<number>) => {
      state.coins = action.payload;
    },
    incrementCoins: (state, action: PayloadAction<number>) => {
      state.coins += action.payload;
    },
    decrementCoins: (state, action: PayloadAction<number>) => {
      state.coins -= action.payload;
    },
  },
});

export const { setCoins, incrementCoins, decrementCoins } = coinSlice.actions;

export default coinSlice.reducer;