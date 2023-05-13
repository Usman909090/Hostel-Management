import React from "react";

const ForgotPassword = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
      <title>BH - Developed by Team Tech</title>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        rel="stylesheet"
      />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
      {/* Template Styles */}
      <link rel="stylesheet" href="css/style.css" type="text/css" />
      <link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css" />
      <link
        rel="stylesheet"
        href="css/Simple-Line-Icons-Webfont/simple-line-icons.css"
      />
      <link rel="stylesheet" href="css/et-line-font/et-line-font.css" />
      {/* Mega Menu */}
      <link rel="stylesheet" href="js/megamenu/stylesheets/screen.css" />
      {/* Responsive Devices Styles */}
      <link
        rel="stylesheet"
        media="screen"
        href="css/responsive-leyouts.css"
        type="text/css"
      />
      {/* forms */}
      <link
        rel="stylesheet"
        href="js/form/css/demo.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        href="js/form/css/sky-forms.css"
        type="text/css"
        media="all"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t.section-lg{\n\t\tpadding:0px;\n\t}\n\t.paddingZero{\n\t\tpadding:0px;\t\n\t}\n",
        }}
      />
      <div className="site-wrapper">
        <div className="temp-header sty1">
          <div className="top-bar solid-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <i className="fa fa-envelope-o" /> i222562@nu.edu.pk{" "}
                  <span>|</span> <i className="fa fa-user" /> Team Tech
                </div>
                <div className="col-md-6 right-padd0 text-right social-media nodisplay">
                  {" "}
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>{" "}
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>{" "}
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-flickr" />
                  </a>{" "}
                </div>
              </div>
              {/*end of row*/}
            </div>
          </div>
          <div className="header-section white pin-style">
            <div className="container">
              <div className="mod-menu">
                <div className="row">
                  <div className="col-sm-2">Booking Hostel</div>
                  <div className="col-sm-10">
                    <div className="main-nav">
                      <div id="menu" className="collapse">
                        <ul className="nav navbar-nav">
                          <li className>
                            {" "}
                            <a href="#">Home</a>
                          </li>
                          <li className>
                            {" "}
                            <a href="register-property.html">
                              Register Property
                            </a>
                          </li>
                          <li className>
                            {" "}
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="#">Features</a>
                            <span className="arrow" />
                            <ul className="dm-align-2">
                              <li>
                                <a href="#">
                                  Feature 1{" "}
                                  <i
                                    className="fa fa-angle-right right"
                                    aria-hidden="true"
                                  />{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Feature 2{" "}
                                  <i
                                    className="fa fa-angle-right right"
                                    aria-hidden="true"
                                  />{" "}
                                </a>{" "}
                                <span className="arrow" />
                                <ul>
                                  <li>
                                    <a href="#">Feature 2a</a>
                                  </li>
                                  <li>
                                    <a href="#">Feature 2b</a>
                                  </li>
                                  <li>
                                    <a href="#">Feature 2c</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end menu*/}
          </div>
          {/*end menu*/}
        </div>
        <div className="clearfix" />
        {/* end features Section 04 */}
        <div className="section-lg">
          <section className="vh-100">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-5 col-md-offset-7 col-lg-4 offset-xl-8 col-sm-8 col-sm-offset-4 col-xs-12 ">
                  <br />
                  <form action id="registration-form" className="sky-form">
                    <header>Forgot Password</header>
                    <fieldset>
                      <section>
                        <label className="input">
                          {" "}
                          <i className="icon-append fa fa-envelope-o" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                          />
                          <b className="tooltip tooltip-bottom-right">
                            Needed to verify your account
                          </b>{" "}
                        </label>
                      </section>
                      <section>
                        <button type="submit" className="button">
                          Send Code
                        </button>
                      </section>
                    </fieldset>
                    <fieldset>
                      <section>
                        <label className="input">
                          {" "}
                          <i className="icon-append fa fa-lock" />
                          <input
                            type="text"
                            name="verificationCode"
                            placeholder="Type Verification Code"
                            id="verificationCode"
                          />
                          <b className="tooltip tooltip-bottom-right">
                            Type Verification Code
                          </b>{" "}
                        </label>
                      </section>
                      <section>
                        <label className="input">
                          {" "}
                          <i className="icon-append fa fa-lock" />
                          <input
                            type="password"
                            name="newPassword"
                            placeholder="Type New Password"
                            id="new Password"
                          />
                          <b className="tooltip tooltip-bottom-right">
                            Type New Password
                          </b>{" "}
                        </label>
                      </section>
                      <section>
                        <label className="input">
                          {" "}
                          <i className="icon-append fa fa-lock" />
                          <input
                            type="password"
                            name="retypePassword"
                            placeholder="Re-type New Password"
                            id="retypePassword"
                          />
                          <b className="tooltip tooltip-bottom-right">
                            Re-type New Password
                          </b>{" "}
                        </label>
                      </section>
                    </fieldset>
                    <footer>
                      <button type="submit" className="button">
                        Submit
                      </button>
                    </footer>
                  </form>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* end features Section 05 */}
        {/* end features Section 12 */}
        <footer className="footer blue-bg">
          <div className="footer-content">
            <div className="container">
              <div className="row">
                <div className="col-md-3 m-bot-2">
                  {/* Footer widget area 1 */}
                  <h4 className="uppercase f-15 font-bold white m-bot-3">
                    About Us
                  </h4>
                  <ul className="list-icon">
                    <li>
                      <i className="fa fa-map-marker" /> This website is
                      developed by Team Tech as a project in university.
                    </li>
                    <li>
                      <i className="fa fa-envelope" />{" "}
                      <a href="mailto:i222562@nu.edu.pk" className="white">
                        i222562@nu.edu.pk
                      </a>
                    </li>
                  </ul>
                  {/* Social icons */}
                  <div className="social-icons bor-light">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss white" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook white" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter white" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube white" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest white" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end: Social icons */}
                  {/* end: Footer widget area 1 */}
                </div>
                <div className="col-md-3 m-bot-2 col-md-offset-1">
                  {/* Footer widget area 4 */}
                  <h4 className="uppercase f-15 font-bold white m-bot-3">
                    Developer Contact
                  </h4>
                  <div className="row clearfix">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <p className="white">
                        You can access us on Facebook, Instagram and E-mail.{" "}
                      </p>
                    </div>
                  </div>
                  {/* end: Footer widget area 4 */}
                </div>
                <div className="col-md-5 m-bot-2">
                  {/* Footer widget area 2 */}
                  <div className="show-post sty-one">
                    <img
                      src="images/logo.png"
                      alt="Image"
                      className="pull-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/* end site wrapper*/}
      </div>
      <a href="#" className="scrollup" />
      {/* end scroll to top of the page*/}
      {/* jQuery first, then Tether, then Bootstrap JS. */}
      {/* form */}
    </div>
  );
};

export default ForgotPassword;
