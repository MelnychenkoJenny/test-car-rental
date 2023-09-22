export const getFilteredCars = (favorite, brandFilter, priceFilter, mileageFrom, mileageTo) => {
  // console.log(111, favorite)
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
      const priceStep = 10;

      const minPrice = Number(matchPrice) - priceStep;
      const maxPrice = Number(matchPrice) + priceStep;
      if (!(matchRentalPrice >= minPrice && matchRentalPrice <= maxPrice)) {
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
