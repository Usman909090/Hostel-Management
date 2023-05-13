import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ email, password });
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = fetch("http://localhost:4000/admin/properties").then(
      (response) => {
        response.json().then((users) => {
          console.log({ users });
          const isValidUser = users.filter(
            (user) => user.email === email && user.password === password
          );
          console.log({ isValidUser });
          if (isValidUser.length === 0) {
            toast("Email or Password Incorrect");
            return;
          }
        });
      }
    );
  };
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
                  </a>{" "}
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>{" "}
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>{" "}
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>{" "}
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
                        <Navbar />
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
                <div className="col-md-6 col-lg-6 col-xl-5 paddingZero">
                  <img
                    src="images/login_page_image.png"
                    className="img-responsive"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-4 col-lg-5 col-xl-4 offset-xl-1 col-md-offset-1 offset-lg-1">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">Login</h2>
                        <h3 className="text-center">Sign in to your account</h3>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          required
                          type="email"
                          id="form3Example3"
                          className="form-control form-control-lg"
                          placeholder="Uername"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <a
                          className="text-body"
                          style={{ color: "gray", fontSize: "12px" }}
                          onClick={() => {
                            navigate("/forgotpassword");
                          }}
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="cold-md-6 text-right">
                        <a
                          // href="signup.html"
                          onClick={() => {
                            navigate("/signup");
                          }}
                          className="link-danger"
                          style={{ color: "gray", fontSize: "12px" }}
                        >
                          Sign up?
                        </a>
                        <p />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
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
                    <i className="fa fa-map-marker" /> This website is developed
                    by Team Tech as a project in university.
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
      <a href="#" className="scrollup" />
      {/* end scroll to top of the page*/}
      {/* jQuery first, then Tether, then Bootstrap JS. */}
      {/* form */}
    </div>
  );
};

export default LoginPage;
