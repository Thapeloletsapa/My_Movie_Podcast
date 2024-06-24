# Podcast App

This is a React-based podcast app that allows users to browse and listen to podcasts, create an account, and save their favorite podcasts.
netlify [https://avioli.netlify.app/]
## Features

* Browse and listen to podcasts
* Create an account and log in
* Save favorite podcasts
* Display favorite podcasts on a dedicated page
* Handle errors and loading states

## Technical Details

* Built with React and React Router
* Uses Redux for state management
* Fetches podcast data from a third-party API
* Uses Supabase for user data storage and retrieval
* Implements error handling and loading states

## Components

* `App`: The main app component that renders the router and routes
* `Home`: The home page component that displays a list of podcasts
* `Signup`: The signup page component that allows users to create an account
* `Login`: The login page component that allows users to log in
* `SinglePodcast`: The single podcast page component that displays podcast details
* `Favourites`: The favourites page component that displays a user's saved podcasts
* `PageNotFound`: The 404 page component that displays when a route is not found

## Redux State

* `podcastsReducer`: Manages the state of podcasts, including the list of all podcasts, the list of displayed podcasts on the home page, and the user's favorite podcasts

* `favourites`: An array of favorite podcasts

* `favouriteSwitch`: A boolean that indicates whether the user has switched their favorite podcasts

* `hasAccount`: A boolean that indicates whether the user has an account

* `isLoading`: A boolean that indicates whether the app is loading data

* `userDataFromDB`: An object that stores the user's data from the database

## Setup and Run

1. Clone the repository and navigate to the project directory
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open `http://localhost:3000` in your browser to access the app

## Notes

* This project uses ESLint and has disabled certain rules for development purposes. It is recommended to re-enable these rules for production.
* The app fetches data from a third-party API and uses Supabase for user data storage and retrieval. You may need to set up your own API keys and Supabase instance for production use.
