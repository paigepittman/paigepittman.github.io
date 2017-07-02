var React = require("react");

var Contact = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12 contactme">
          <div className="contactbox">
            <div className="panel-heading">
              <h3 className="panel-title title">contact</h3>
            </div>
            <div className="panel-body">
              <div className="links">
                <center>
                <i className="fa fa-share" aria-hidden="true"></i> &nbsp;
                <a href="mailto:paigepittman@mac.com">email</a>
                <div className="links">
                  <i className="fa fa-github" aria-hidden="true"></i> &nbsp;
                  <a target="_blank" href="https://github.com/paigepittman">
                    github</a>
                </div>
                <div className="links">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>  &nbsp;
                  <a href="https://www.linkedin.com/in/paigepittman/" target="_blank">
                    linkedin</a>
                </div>


            </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Contact;
