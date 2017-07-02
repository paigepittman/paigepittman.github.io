var React = require("react");
var Link = require("react-router").Link;
var Main = React.createClass({

  render: function() {

    return (
      <div>
      <header>
      </header>
      <main className="container">
        <div className="jumbotron">
          <h2 className="title" id="name">Paige Pittman</h2>
            <ul className="navs">
            <li><Link to="/Contact" ><button className="btn contact">Contact</button></Link></li>
            <li><Link to="/Portfolio"><button className="btn port">Portfolio</button></Link></li>
            <li><Link to="/About"><button className="btn home">home</button></Link></li>

          </ul>
        {/* <hr className="logo-lines" id="pink"/> */}
        {/* <hr className="logo-lines" id="blue"/>
        <hr className="logo-lines" id="purple"/> */}

        </div>


        <div className="row body-row">

          {this.props.children}

        </div>
      </main>
      <footer className="page-footer">
        <div className="footer-container">
  <div Name="row">
    <div className="col l6 s12">
        <center>built with <a href="https://facebook.github.io/react/"> React</a> and <a href="http://materializecss.com/">Materialize</a></center>
      </div>
    </div>
  </div>
      </footer>
      </div>
    );
  }
});

module.exports = Main;
