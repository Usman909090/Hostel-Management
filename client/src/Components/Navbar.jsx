import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(
    window.location.pathname
  );

  const { userSession, setUserSession } = useContext(authContext)

  const navList = userSession?.token ? "Admin" : "Public"

  const navItems = {
    Public: [{ title: "Login", route: "/login" }],
    Admin: [{ title: "Register Property", route: "/register-property" },
    { title: "Logout", route: "/login" }]
  }


  return (
    <ul className="nav navbar-nav">
      <li class=""> <a href="home.html">Home</a></li>

      {navItems[navList].map(({ title, route }, index) =>
        <li className={`${route === activeNav && "active"}`}>
          {" "}
          <a
            onClick={(event) => {
              event.preventDefault()
              if (title?.includes("Logout")) {
                setUserSession(undefined)
                navigate(route, { replace: true });
                return
              }
              navigate(route);
            }}
            href={route}
          >
            {title}
          </a>
        </li>
      )}

      <li

      >
        <a>Features</a>
        <span className="arrow" />
        <ul className="dm-align-2">
          <li>
            <a href="#">
              Feature 1{" "}
              <i className="fa fa-angle-right right" aria-hidden="true" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              Feature 2{" "}
              <i className="fa fa-angle-right right" aria-hidden="true" />{" "}
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
  );
};

export default Navbar;
