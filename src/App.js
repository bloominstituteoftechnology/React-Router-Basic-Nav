import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'; // new

import './App.css';

const App = props => {
  const productData = {
    name: 'ipad',
    price: 'expensive',
  };

  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="navlink--active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="navlink--active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="navlink--active">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/greet/CS7" activeClassName="navlink--active">
              Greeter
            </NavLink>
          </li>
          <li>
            <NavLink to="/catchem" activeClassName="navlink--active">
              Catch the Fellowship!!
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route
            path="/products"
            render={props => <Products product={productData} />}
          />
          <Route path="/greet/:name" component={Greeter} />
          <Route path="/catchem" component={Gandalf} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

class Gandalf extends React.Component {
  render() {
    return <h1>You Shall Not Pass!!!!</h1>
  }

  componentDidMount() {
    this.waitTime = setTimeout(() => {
      // send the Balrog back to Home
      this.props.history.push('/about'); // this line let you navigate programmatically
    }, 3000);
  }

  componentWillUnmount() {
    window.clearTimeout(this.waitTime);
  }
}

function Greeter(props) {
  console.log('greeter props', props);
  const name = props.match.params.name;
  return (
    <div>
      <h3>Hello {name}</h3>
    </div>
  );
}

function About(props) {
  console.log('About props', props);

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>About Component</h1>
      <p id="paragraph">This is the About Component</p>
    </div>
  );
}

function Movies(props) {
  return (
    <div>
      <h1>Movies Component</h1>
      <p id="paragraph">This is the Movies Component</p>
    </div>
  );
}

function Music() {
  return (
    <div>
      <h1>Music Component</h1>
      <p id="paragraph">This is the Music Component</p>
    </div>
  );
}

function Home() {
  const data = {
    id: 3,
    count: 5,
    unit: 'pounds',
  };

  const linkConfig = {
    pathname: `/about`,
    state: data,
  };

  return (
    <div>
      <Link to={linkConfig}>About with 5 pounds</Link>
      <h1>Home Component</h1>
      <p id="paragraph">This is the Home Component</p>
    </div>
  );
}

class Products extends React.Component {
  render() {
    console.log('products props', this.props);
    return (
      <div>
        <div>
          <div>{this.props.product.name}</div>
          <div>{this.props.product.price}</div>
        </div>
        <ul>
          <li>
            <NavLink to="/products/movies" activeClassName="navlink--active">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/music" activeClassName="navlink--active">
              Music
            </NavLink>
          </li>
        </ul>
        <hr />
        <Route path="/products/movies" component={Movies} />
        <Route path="/products/music" component={Music} />
        <hr />
      </div>
    );
  }
}

function NotFound(props) {
  return <div>Page not found</div>;
}

export default App;

// /greet/Nathan
