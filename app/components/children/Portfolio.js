var React = require("react");

var Portfolio = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12 port-page">
          <div className="card-panel portfolio-panel">
            <div className="panel-heading">
              <h3 className="panel-title title">my projects</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/map.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">Capitol Hill</h5>
                      <a href="https://capitol-hill.herokuapp.com">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>
                      <p>Capitol Hill is an application designed to easily connect people with their Senators and Congressional representatives, and to keep constituents up to date with their representative’s legislative actions.</p><br/><br/>
                      Role: Front-end Developer<br/>

                    </div>
                    {/* <!-- <div className="card-action">
                    </div> --> */}
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/groopup.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">GroopUp</h5>
                      <a href="http://groopup.herokuapp.com/">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>
                      <p>EventBrite meets Groupon. "GroopUp" offers discounted rates on activities with the opportunity to meet people with similar interest. Take a personality test to find the most compatible events for you.</p><br/><br/>
                      Role: Front-end Developer<br/>
                    </div>
                    {/* <!-- <div className="card-action">
                          </div> --> */}
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/music.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">Music++</h5>
                      <a href="https://kikanga.github.io/Artist-Direct/">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>
                      <p>Music++ is creates a one-stop shop for music lovers' needs. One quick search transports the user to a music hub; listen to their top songs, buy tickets to their upcoming shows, read their tweets and more.</p><br/>
                      Role: Front-end Developer<br/>
                    </div>
                    {/* <!-- <div className="card-action">

                          </div> --> */}
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/burger.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">Burger Buddy</h5>
                      <a href="https://safe-badlands-36347.herokuapp.com/">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>

                      <p>Burger Buddy allows the user to 'eat', 'order' and 'build your own burger' through sequelize and a sql database</p><br/>
                      Role: Sole Developer<br/>

                    </div>
                    {/* <!-- <div className="card-action">
                          </div> --> */}
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/crystals.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">Crystal Collector</h5>
                      <a href="https://paigepittman.github.io/week-4-game/">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>
                      <p>Crystal Collector allows the user to pick crystals with random values to try to get a pre-determined score without going over</p><br/>
                      Role: Sole Developer<br/>
                    </div>
                    {/* <!-- <div className="card-action">
                          </div> --> */}
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/trivia.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">Harry Potter Trivia</h5>
                      <a href="https://paigepittman.github.io/TriviaGame/">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>

                      <p>JavaScript based trivia game
                      </p><br/><br/><br/>
                      Role: Sole Developer<br/>
                    </div>
                    {/* <!-- <div className="card-action">

                          </div> --> */}
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/giphy.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">giftastic</h5>
                      <a href="https://paigepittman.github.io/giftastic/">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>

                      <p>JavaScript application using the Giphy API to generate random gifs and create custom buttons for gif categories.</p><br/><br/>
                      Role: Sole Developer<br/>
                    </div>
                    {/* <!-- <div className="card-action">

                          </div> --> */}
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/trains.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">Train Times</h5>
                      <a href="https://paigepittman.github.io/train-times/">VIEW SITE</a> | <a href="https://github.com/paigepittman/train-times">VIEW CODE</a>

                      <p>JavaScript application using a firebase database to store train times. Users can add new trains and their next arrivals will be automatically calcuated for the user.</p><br/>
                      Role: Sole Developer<br/>
                    </div>
                    {/* <!-- <div className="card-action">

                          </div> --> */}
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/disney-cards.png"/>
                    </div>
                    <div className="card-content">
                      <h5 className="title">Flashcard Generator</h5>
                      <a href="https://github.com/paigepittman/flashcard-generator">VIEW CODE</a>

                      <p>Node application for creating flashcards with the option to use fill in the blank cards or basic.</p><br/><br/>
                      Role: Sole Developer<br/>
                    </div>
                    {/* <!-- <div className="card-action">

                          </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
