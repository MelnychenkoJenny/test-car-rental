export const getFilteredCars = (favorite, brandFilter, priceFilter, mileageFrom, mileageTo) => {
  return favorite?.filter(car => {
    let isMatch = true;
    if (brandFilter) {
      isMatch = car.make === brandFilter;
    }
    if (priceFilter) {
      const match = priceFilter.match(/\$(\d+)/);
      const matchRentalPrices = car.rentalPrice.match(/\$(\d+)/);
      const matchPrice = match[1];
      const matchRentalPrice = matchRentalPrices[1];
      const selectedPrice = Number(matchPrice);

      if (!(selectedPrice >= matchRentalPrice)) {
        isMatch = false;
      }
    }
    if (mileageFrom) {
      if (!(car.mileage >= mileageFrom)) {
        isMatch = false;
      }
    }

    if (mileageTo) {
      if (!(car.mileage <= mileageTo)) {
        isMatch = false;
      }
    }

    if (mileageFrom && mileageTo) {
      if (!(car.mileage >= mileageFrom && car.mileage <= mileageTo)) {
        isMatch = false;
      }
    }

    return isMatch;
  });

};
