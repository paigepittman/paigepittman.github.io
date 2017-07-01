var React = require("react");
var Link = require("react-router").Link;
var Main = React.createClass({

  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2 className="title" id="name">Paige Pittman</h2>
            <ul className="navs">
            <li><Link to="/Contact" className="btn contact">Contact</Link></li>
            <li><Link to="/Portfolio"><button className="btn port">Portfolio</button></Link></li>
            <li><Link to="/About"><button className="btn home">home</button></Link></li>

          </ul>
        <hr className="logo-lines" id="pink"/>
        {/* <hr className="logo-lines" id="blue"/>
        <hr className="logo-lines" id="purple"/> */}

        </div>


        <div className="row">

          {this.props.children}

        </div>

      </div>
    );
  }
});

module.exports = Main;
