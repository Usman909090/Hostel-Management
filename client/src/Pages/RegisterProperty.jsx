import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const RegisterProperty = () => {
  const [formState, setFormState] = useState({
    propertyName: "",
    propertyType: "",
    totalBedrooms: "",
    numberOfBeds: "",
    address1: "",
    address2: "",
    state: "",
    zipCode: "",
    country: "",
    city: "",
    contactName: "",
    managerEmailAddress: "",
    bookingEmailAddress: "",
    websiteAddress: "",
    currency: "",
    language: "",
    phoneNumber: "",
  });

  const handleSubmit = () => {
    console.log({ formState });
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
            "\n\t.section-lg{\n\t\tpadding:0px;\n\t}\n\t.paddingZero{\n\t\tpadding:0px;\t\n\t}\n\t.heading3{\n\t\tdisplay: block;\n    padding: 20px 30px;\n    border-bottom: 1px solid rgba(0,0,0,.1);\n    font-size: 25px;\n    font-weight: 300;\n    color: #232323;\t\n\t}\n",
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
                {/*<div class="col-md-6 col-lg-6 col-xl-5 paddingZero">
				  <img src="images/signup-img.jpg"
					class="img-responsive" alt="Sample image">
				</div>*/}
                <div className="col-md-10 col-md-offset-1 col-lg-10 offset-xl-1 col-sm-12 col-xs-12 ">
                  <br />
                  <form
                    onSubmit={handleSubmit}
                    id="registration-form"
                    className="sky-form"
                  >
                    <header>Create Hostel Account</header>
                    <fieldset>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="propertyName"
                              placeholder="Property Name"
                              value={formState.propertyName}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    propertyName: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="propertyType"
                              placeholder="Property Type"
                              value={formState.propertyType}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    propertyType: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="number"
                              name="totalNumberBedrooms"
                              placeholder="Total Number of Bedrooms"
                              value={formState.totalBedrooms}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    totalBedrooms: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="numberOfBeds"
                              placeholder="Number of Beds"
                              value={formState.numberOfBeds}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    numberOfBeds: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="address1"
                              placeholder="Address 1"
                              value={formState.address1}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    address1: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="address"
                              placeholder="Address 2"
                              value={formState.address2}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    address2: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="state"
                              placeholder="State/Province"
                              value={formState.state}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    state: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="zipcode"
                              placeholder="Postal/Zip Code"
                              value={formState.zipCode}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    zipCode: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="country"
                              placeholder="Country"
                              value={formState.country}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    country: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="city"
                              placeholder="City"
                              value={formState.city}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    city: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                    </fieldset>
                    <fieldset>
                      <div className="row">
                        <div className="col-d-12">
                          <h3 className="heading3">Contact Details</h3>
                        </div>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="contactName"
                              placeholder="Contact Name"
                              value={formState.contactName}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    contactName: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="emaiAddress"
                              placeholder="Manager Email Address"
                              value={formState.managerEmailAddress}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    managerEmailAddress: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="emailAddressForBooking"
                              placeholder="Email Address for Bookings"
                              value={formState.bookingEmailAddress}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    bookingEmailAddress: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="websiteAddress"
                              placeholder="Website Address"
                              value={formState.websiteAddress}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    websiteAddress: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="currency"
                              placeholder="Currency"
                              value={formState.currency}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    currency: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="language"
                              placeholder="Language"
                              value={formState.language}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    language: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="phoneNumber"
                              placeholder="phoneNumber"
                              value={formState.phoneNumber}
                              onChange={(e) =>
                                setFormState((prev) => {
                                  return {
                                    ...prev,
                                    phoneNumber: e.target.value,
                                  };
                                })
                              }
                            />
                          </label>
                        </section>
                      </div>
                    </fieldset>
                    <footer>
                      <button type="submit" className="button">
                        Submit
                      </button>
                    </footer>
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

export default RegisterProperty;
