# React Router Basic Nav

Topics:

* Single Page Applications
* React Router V5 (react-router-dom)
* Routing, declarative component based routing
* Path and Component

## Project Description

* A starter pack project for all things React Router. Learn to set up a basic routing system within an application. Use this application to help guide your learning over the next couple of days.
* **Note** that this project has already been boilerplated for you. There is no need to run any installation steps beyond `npm install`.

### Initialize Project

- [x] cd into the repository and run `npm install`
- [x] run `npm start`

### Steps for implementing React Router

- [ ] You'll notice we've already installed `react-router-dom` for you.
- [ ] `import` your BrowserRouter as Router inside your `index.js` file.
- [ ] Wrap your `<App />` component that you're passing to `ReactDOM.render()` with your new `Router` component.
- [ ] open up your chrome `REACT DEV TOOLS` and notice your app is now all wrapped in `BrowserRouter`


### Steps for "Declaring" your routes

- [ ] Inside of your `App.js` file `import { Route } from 'react-router-dom';`
- [ ] This is where we're going to declare and specify our router.
- [ ] Create 3 `<Route />` setting their `path` prop equal to `/`, `/about`, `/contact` with their respective components.
- [ ] Be sure to include the `exact` prop on the root component for `/` to make sure that it's rendering the exact component and not all the other components.

### Steps for setting up your Navigation

- [ ] Inside of `Navigation.js` `import { Link } from 'react-router-dom'`.
- [ ] Declare the `to` as the href on `<Link>` and specify the correct routes for your app to navigate towards.
- [ ] Head over to your app and start navigating. You should be able to see your URLS changing their paths as you go. Each path should display the proper component. 

### Resources

* [Code Sandbox from Lecture](https://codesandbox.io/s/n58oqgwmP)
* [React Router Quick Start Guide](https://reacttraining.com/react-router/web/guides/quick-start)
