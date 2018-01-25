import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Categories = ({ match }) => (
  <div>
    <h2>Categories</h2>
    <ul>
      <li>
        <Link to={`${match.url}/second_skin`}>Second Skin</Link>
      </li>
      <li>
        <Link to={`${match.url}/cool_cotton`}>Cool Cotton</Link>
      </li>
      <li>
        <Link to={`${match.url}/360_sport`}>360 Sport</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <h1>Tommy John</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/categories" component={Categories} />
      <Route path="/product" component={Product} />
    </div>
  </Router>
);
export default App;
