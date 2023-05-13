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
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<RegisterProperty />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register-property" element={<RegisterProperty />} />
            <Route path="*" element={<h2>Page not found</h2>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>

    </div>
  );
}

export default App;
