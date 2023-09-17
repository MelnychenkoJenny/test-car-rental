## Car Rental Application

This is a simple car rental application developed as a test project.

## Overview

The application consists of three main pages:

1. Home Page: Provides a general overview of the services offered by the company.

![Home Page](./assets/homePage.jpg)

2. Catalog Page: Displays a catalog of cars with different specifications that users can filter by brand, hourly rental price, and mileage.

![Catalog Page](./assets/catalogPage.jpg)
![Catalog Page2](./assets/catalogPage2.jpg)

3. Favorites Page: Shows advertisements added by the user to their favorites list.

![Favorites Page](./assets/favoritePage.jpg)
![Favorites Page2](./assets/favoritePage2.jpg)

## Features

- Viewing and filtering car advertisements by brand, hourly rental price, and mileage.

![Filtering](./assets/filtr.jpg)

- Adding and removing advertisements from the favorites list.

![Adding and Removing from Favorites](./assets/favoriteHeart.jpg)

- Viewing detailed information about a car and its rental conditions in a modal window.

![Modal Window](./assets/modal.jpg)

- Contacting the car rental company via the "Rent a Car" button with a link to the phone number +380730000000.

## Technical Requirements

- The application is built with React.
- Routing is implemented using React Router.
- Car advertisement data is retrieved from a dedicated server created on MockAPI.
- The appearance and style of the interface are designed according to your preferences.
- Pagination is implemented on the Catalog page, with 8 advertisements per page.
- User actions are preserved even after page refresh.

## Additional Features

- Filtering:
  - Dropdown list to select a car brand.
  - Dropdown list to select hourly rental prices with a $10 increment.
  - Input fields to define a mileage range.

## Error Handling and Empty Result

- The application includes error handling pages and an empty result page to effectively display various error scenarios and cases where nothing is found based on the applied filters. Users will be informed and directed in cases of errors and empty results.

![Empty Result](./assets/empty.jpg)

## Non-Existent Route

- If a user accesses a route that does not exist, they will be redirected to the home page.

## Authors

- Created by Yevheniia Melnychenko ❤️
- Car images sourced from [here](https://cloudinary.com/)
- MockAPI is used to provide car data.