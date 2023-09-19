import { createSlice } from '@reduxjs/toolkit';
import { fetchGreetings } from './thunkMiddleware';
// import fetchData from './middleware';ééé

const initialState = {
  greeting: "",
  error: undefined,
  isLoading: false,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    // changePage: (state, { payload }) => ({ ...state, currentPage: payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => ({
        ...state,
        isLoading: true,
        error: undefined,
      }))
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        error: undefined,
        isLoading: false,
        greeting: action.payload.text,
      }))
      .addCase(fetchGreetings.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }));
  },
});

export const { actions, reducer } = greetingSlice;
