import { createAsyncThunk } from '@reduxjs/toolkit';
import { filterByMileage, filterByPrice } from 'helpers/helpers';
import { getCarsAPI } from 'services/API';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params, { rejectWithValue }) => {
    const { page, mileageFrom, mileageTo, price } = params;
    console.log(params);
    try {
      const result = await getCarsAPI(params);
      console.log(result);
      let carsInfo = result;

      if (mileageFrom || mileageTo)
        carsInfo = filterByMileage(carsInfo, mileageFrom, mileageTo);

      if (price) carsInfo = filterByPrice(carsInfo, price);

      return { carsInfo, page };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
