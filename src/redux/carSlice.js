import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';

const initialState = {
  carsInfo: [],
  favoriteCars: [],
  isLoading: false,
  isLastPage: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.isLastPage = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addFavoriteCar(state, action) {
      state.favoriteCars.push(action.payload);
    },
    deleteFavoriteCar(state, action) {
      state.favoriteCars = state.favoriteCars.filter(
        car => car.id !== action.payload.id
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        const { carsInfo, page } = action.payload;

        if (page === 1) state.carsInfo = carsInfo;
        if (page > 1) state.carsInfo = [...state.carsInfo, ...carsInfo];

        if (carsInfo.length < 12 || carsInfo.length > 12)
          state.isLastPage = true;

        state.error = null;
        state.isLoading = false;
      })
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected);
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = carSlice.actions;

export const carsReducer = carSlice.reducer;
