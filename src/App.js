//Pages
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import EmailSent from "./pages/EmailSent";
// import Sidebar from "./components/Sidebar";
// import ForgottenPassword from "./pages/ForgottenPassword";

//components imports
import Navbar from "./components/Navbar/Navbar";

//Usestate
// import { useState } from "react";
//Styled-Components

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";

// import {useState} from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/emailsent" element={<EmailSent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/forgotpassword" element={<ForgottenPassword />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//  { <div className="App"></div> }
//    <Dashboard />
