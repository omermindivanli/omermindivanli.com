import React, { Component } from 'react';
import './Life.css';

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
              <h1>Life</h1>
              <p>
                I strongly believe that the importance of work-life balance. I am fond of Music,
                Travelling and Seeing The Natural Landscapes.
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
            </div>
          </div>
        </div>
        <hr />
      </main>
    );
  }
}

export default Life;
