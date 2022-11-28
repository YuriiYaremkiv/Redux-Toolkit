import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const clicksSlice = createSlice({
  name: 'value',
  initialState: { value: 0 },
  reducers: {
    update: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { update } = clicksSlice.actions;

const persistConfig = {
  key: 'clicks',
  version: 1,
  storage,
};

export const persistedClicksReducer = persistReducer(
  persistConfig,
  clicksSlice.reducer
);

// Selectors
export const getvalue = state => state.clicks.value;
