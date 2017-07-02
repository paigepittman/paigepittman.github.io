var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var About = require("../components/children/About");
var Contact = require("../components/children/Contact");
var Portfolio = require("../components/children/Portfolio");

module.exports = (

  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      <Route path="About" component={About} />

      <Route path="Contact" component={Contact} />

      <Route path="Portfolio" component={Portfolio} />

      <IndexRoute component={About} />

    </Route>
  </Router>
);
