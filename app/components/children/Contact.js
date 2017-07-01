var React = require("react");

var Contact = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title title">contact</h3>
            </div>
            <div className="panel-body">
              <div className="links">
                <i className="fa fa-share" aria-hidden="true"></i>
                <a href="mailto:paigepittman@mac.com">email</a>
                <div className="links">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  <a href="https://github.com/paigepittman">
                    github</a>
                </div>
                <div className="links">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  <a href="https://www.linkedin.com/in/paigepittman/">
                    linkedin</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
