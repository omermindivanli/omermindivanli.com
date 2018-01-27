import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
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
              <h1>Portfolio</h1>
              <p>
                As I said before, I am a junior developer. Besides my JavaScript Studies, I try to
                get freelance jobs and learn how to fix the Real World Web Applications.
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
    );
  }
}

export default Portfolio;
