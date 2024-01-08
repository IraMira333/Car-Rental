import { createAsyncThunk } from '@reduxjs/toolkit';
import { filterByMake, filterByMileage, filterByPrice } from 'helpers/helpers';
import { getCarsAPI } from 'services/API';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (values, { rejectWithValue }) => {
    const { page, mileageFrom, mileageTo, price, make } = values;

    try {
      if (mileageFrom || mileageTo || price || make) {
        const params = { page };
        const result = await getCarsAPI(params);

        let carsInfo = result;

        if (mileageFrom || mileageTo)
          carsInfo = filterByMileage(carsInfo, mileageFrom, mileageTo);

        if (price) carsInfo = filterByPrice(carsInfo, price);
        if (make) carsInfo = filterByMake(carsInfo, make);
        return { carsInfo, page };
      }
      const limit = 12;
      const params = { limit, page, make };
      const result = await getCarsAPI(params);

      let carsInfo = result;
      return { carsInfo, page };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
