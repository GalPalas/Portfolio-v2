import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import sendEmail from "./sendEmail";
import "./connectForm.css";

function ConnectForm() {
  return (
    <div>
      <footer>
        <div className="container-fluid padding">
          <div className="row">
            <Fade top cascade>
              <div className="col-12">
                <h2 className="display-4">Contact</h2>
                <p className="lead">
                  I'm eager to learn new things and improve myself. I'm
                  currently looking for my next challenge so feel free to reach
                  out to me any time.
                </p>
              </div>
            </Fade>
          </div>

          <div className="container-fluid padding">
            <div className="row text-center">
              <div className="col-lg-4">
                <Fade top>
                  <h1 className="display-2">Gal Palas</h1>
                </Fade>
                <Bounce top cascade>
                  <ul className="contact-details">
                    <li>
                      <i className="fa fa-home"></i> Israel, Haifa / Tel-Aviv
                    </li>

                    <li>
                      <i className="fa fa-phone"></i> Leave your number and I'll
                      call you
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> galpalas265@gmail.com
                    </li>
                  </ul>
                </Bounce>
              </div>

              <div className="col-lg-8">
                <p className="email-header">Email Me</p>

                <form onSubmit={sendEmail}>
                  <Fade top cascade>
                    <div className="row">
                      <div className="col">
                        <p className="name">
                          <label className="title">Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                          ></input>
                        </p>
                      </div>

                      <div className="col">
                        <p className="company">
                          <label className="title">Company</label>
                          <input
                            type="text"
                            name="company"
                            className="form-control form-control-lg"
                          ></input>
                        </p>
                      </div>
                    </div>
                  </Fade>

                  <Fade top cascade>
                    <div className="row">
                      <div className="col">
                        <p className="name">
                          <label className="title">Email Address</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control form-control-lg"
                          ></input>
                        </p>
                      </div>

                      <div className="col">
                        <p className="company">
                          <label className="title">Phone Number</label>
                          <input
                            type="text"
                            name="phone"
                            className="form-control form-control-lg"
                          ></input>
                        </p>
                      </div>
                    </div>
                  </Fade>

                  <div className="row">
                    <div className="col-12">
                      <p className="message">
                        <label className="title">Message</label>
                        <Fade top>
                          <div class="form-floating">
                            <textarea
                              className="form-control"
                              name="message"
                              placeholder="Leave a comment here"
                              id="floatingTextarea"
                            ></textarea>
                          </div>
                        </Fade>
                      </p>
                    </div>
                    <div className="col-12">
                      <Fade top>
                        <button
                          type="submit"
                          className="btn btn-secondary btn-lg"
                        >
                          Send me an email <i className="fa fa-envelope"></i>
                        </button>
                      </Fade>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <hr className="light-100"></hr>
              <h5>&copy; 2021 Gal Palas</h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConnectForm;
