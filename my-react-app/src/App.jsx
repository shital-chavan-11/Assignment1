import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import UserCard from "./UserCard";
import "./App.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to My Project</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
  <Link to="/signup">
    <button className="nav-button">Go to Sign Up</button>
  </Link>
  <Link to="/usercard">
    <button className="nav-button">Go to User Card</button>
  </Link>
</div>

    </>
  );
}

function UserCardPage() {
  return (
    <>
      <Navbar />
       
      <UserCard name="Shital Chavan" email="shital@example.com" />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/usercard" element={<UserCardPage />} />
    </Routes>
  );
}

export default App;
