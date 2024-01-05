export const createArrayWithStep = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const filterByPrice = (cars, priceTo = 0) => {
  return cars.filter(car => {
    const carPrice = Number(car.rentalPrice.split('$')[1]);
    return carPrice <= priceTo;
  });
};

export const filterByMileage = (cars, start = 0, end = 0) => {
  if (!start && !end) return cars;
  if (!start && end) return cars.filter(car => car.mileage <= end);
  if (start && !end) return cars.filter(car => car.mileage >= start);

  if (start && end) {
    return cars.filter(car => car.mileage >= start && car.mileage <= end);
  }
};
