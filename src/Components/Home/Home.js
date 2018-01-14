import React, { Component } from 'react';
import photo from '../../Assests/header.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <main role="main" className="container">
          <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-12 col-md-9">
              <p className="float-right d-md-none">
                <button type="button" className="btn btn-primary btn-sm" data-toggle="offcanvas">
                  Toggle nav
                </button>
              </p>
              <div className="jumbotron">
                <h1>Hi, Everyone!</h1>
                <p>
                  I am Ömer Mindivanli, 29 years old and from Turkey. I am a junior and curious web
                  developer. I am really more into cutting-edge web technologies to create a
                  highly-preferable User Experience. For a long time, I have fallin love with
                  JavaScript. I cannot get away from it :).
                </p>
              </div>
              <div className="row">
                <div className="col-6 col-lg-4">
                  <h2>Heading</h2>
                  <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.{' '}
                  </p>
                  <p>
                    <a className="btn btn-secondary" href="#" role="button">
                      View details &raquo;
                    </a>
                  </p>
                </div>
                <div className="col-6 col-lg-4">
                  <h2>Heading</h2>
                  <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.{' '}
                  </p>
                  <p>
                    <a className="btn btn-secondary" href="#" role="button">
                      View details &raquo;
                    </a>
                  </p>
                </div>
                <div className="col-6 col-lg-4">
                  <h2>Heading</h2>
                  <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.{' '}
                  </p>
                  <p>
                    <a className="btn btn-secondary" href="#" role="button">
                      View details &raquo;
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
              <div className="list-group">
                <a href="#" className="list-group-item active">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
                <a href="#" class="list-group-item">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
                <a href="#" className="list-group-item">
                  Link
                </a>
              </div>
            </div>
          </div>
          <hr />
        </main>
      </div>
    );
  }
}

export default Home;
