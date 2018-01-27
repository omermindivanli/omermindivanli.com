import React, { Component } from 'react';
import photo from '../../Assests/header.jpg';
import './Home.css';

class Home extends Component {
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
                <img className="img-fluid" src={photo} alt="ömer" />
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
                <img className="img-fluid" src={photo} alt="ömer" />
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
                <img className="img-fluid" src={photo} alt="ömer" />
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
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-12 col-md-9">
            <h5>Funny Story about How I started to web development:</h5>
            <p>
              In the year of 2007, I got a course which is called C++ 101 in Dumlupinar University.
              The funny thing about is that My aunt was a software programmer and when I was a child
              she thought me how to code circles with QBasic, whose Windows Version was 3.1. When I
              was a child, I was crazy about computers. I always wanted to have a computer to play
              video games.
            </p>
          </div>
        </div>
        <hr />
        <br />
      </main>
    );
  }
}

export default Home;
