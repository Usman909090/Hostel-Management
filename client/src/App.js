import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ForgotPassword from "./Pages/ForgotPassword";
import RegisterProperty from "./Pages/RegisterProperty";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<RegisterProperty />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="registerProperty" element={<RegisterProperty />} />
            <Route path="*" element={<h2>Page not found</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
