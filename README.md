# React Router Basic Nav

Topics:

* Single Page Applications
* Routing, declarative component based routing
* Browser vs Hash History
* Path and Component

## Project Description

* A starter pack project for all things React Router. Learn to set up a basic routing system within an application. Use this application to help guide your learning over the next couple of days.

### Initialize Project

* cd into the repository and run `yarn install`
* run `yarn start`

### Steps for implementing React Router

* You'll notice we've already installed react-router-dom for you.
* `import` your Router as BrowserRouter inside your `index.js` file.
* Wrap your `<App />` component that you're passing to `ReactDOM.render()` with your new `Router` component.
* open up your chrome `REACT DEV TOOLS` and notice your app is now all wrapped in `BrowserRouter`
* inside the `REACT DEV TOOLS` expand `<BrowserRouter>` and highlight `<Router>` and notice that here is a `"history"` object on props.

### Steps for "Declaring" your routes

* Inside of your `App.js` file `import { Route } from 'react-router-dom';`
* This is where we're going to declare and specify our router.
* Create 3 `<Route />` setting their `path` prop equal to `/`, `/about`, `/contact` with their respective components.
* Be sure to incluce the `exact` prop on the root component for `/` to make sure that it's rendering the exact component and not all the other components.
* You should now be able to type `/`, `/about`, `/contact` after `localhost:PORT/` to see what's a

### Steps for setting up your Navigation

* Inside of `Navigation.js` `import { Link } from 'react-router-dom'`
* Delete `NavLink` and replace it with `<Link />`
* Pro-tip: highlight NavLink and use `cmd/ctrl + d` to select them all at once.
* Change the href on `<Link>` to `to` and specify the correct routes to navigate to.
* Head over to your app and start navigating. You should be able to see your URLS changing their paths as you go.

### Resources

* [Code Sandbox from Lecture](https://codesandbox.io/s/n58oqgwmP)
* [React Router 4 Quick Start Guide](https://reacttraining.com/react-router/web/guides/quick-start)
