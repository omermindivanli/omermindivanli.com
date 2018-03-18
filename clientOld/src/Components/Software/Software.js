import React, { Component } from 'react';
import './Software.css';

class Life extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-12 col-md-9">
            <p className="float-right d-md-none">
              <button type="button" className="btn btn-primary btn-sm" data-toggle="offcanvas">
                Toggle nav
              </button>
            </p>
            <div className="jumbotron">
              <h1>Software</h1>
              <p>
                My aim is to be a highly-skilled developer without losing my passion. Otherwise, as
                far as I read, The imposter syndrome could be challenging for most of developers.
              </p>
            </div>
            <div className="row">
              <div className="col-6 col-lg-4">
                <img className="img-fluid" src="" alt="ömer" />
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                  commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.{' '}
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details &raquo;
                  </a>
                </p>
              </div>
              <div className="col-6 col-lg-4">
                <img className="img-fluid" src="" alt="ömer" />
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                  commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.{' '}
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details &raquo;
                  </a>
                </p>
              </div>
              <div className="col-6 col-lg-4">
                <img className="img-fluid" src="" alt="ömer" />
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                  commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.{' '}
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
                React
              </a>
              <a href="#" className="list-group-item">
                Redux
              </a>
              <a href="#" className="list-group-item">
                React-Router
              </a>
              <a href="#" className="list-group-item">
                HTML & CSS
              </a>
              <a href="#" className="list-group-item">
                Al
              </a>
              <a href="#" className="list-group-item">
                JavaScript
              </a>
              <a href="#" className="list-group-item">
                DeepLearning
              </a>
              <a href="#" className="list-group-item">
                Python
              </a>
            </div>
          </div>
        </div>
        <hr />
      </main>
    );
  }
}

export default Life;
