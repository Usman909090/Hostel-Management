import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const [activeIndex, setActiveIndex] = useState(
  //   localStorage.getItem("activeIndex")
  //     ? localStorage.getItem("activeIndex")
  //     : 0
  // );
  const activeIndex = localStorage.getItem("activeIndex")
    ? localStorage.getItem("activeIndex")
    : 0;
  console.log({ activeIndex });
  return (
    <ul className="nav navbar-nav">
      <li className={`${activeIndex == 0 && "active"}`}>
        {" "}
        <a
          onClick={() => {
            localStorage.setItem("activeIndex", "0");
            navigate("/");
          }}
        >
          Home
        </a>
      </li>
      <li className={`${activeIndex && activeIndex === "1" && "active"}`}>
        {" "}
        <a
          onClick={() => {
            localStorage.setItem("activeIndex", "1");
            navigate("/registerproperty");
          }}
        >
          Register Property
        </a>
      </li>
      <li className={`${activeIndex && activeIndex === "2" && "active"}`}>
        {" "}
        <a
          onClick={() => {
            localStorage.setItem("activeIndex", "2");
            navigate("/login");
          }}
        >
          Login
        </a>
      </li>
      <li
        className={`${activeIndex && activeIndex === "3" && "active"}`}
        onClick={() => {
          localStorage.setItem("activeIndex", "3");
        }}
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
