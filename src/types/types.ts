import authReducer from '../store/auth/authSlice';
import coinReducer from '../store/slots/coinSlice';

export interface User {
  username: string;
  email: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  providerName: string;
  thumb: {
    url: string | null;
  };
}

export type AuthState = {
  token: string | null;
  user: User | null;
};

export type RootState = {
  auth: ReturnType<typeof authReducer>
  coin: ReturnType<typeof coinReducer>
};

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export type Reel = string[];

export type Fruit = 'cherry' | 'apple' | 'banana' | 'lemon';

export interface SpinResult {
  reel1: Fruit;
  reel2: Fruit;
  reel3: Fruit;
}

export interface SpinButtonProps {
  handleSpin: () => void;
  disabled: boolean;
}

export interface CoinState {
  coins: number;
}


