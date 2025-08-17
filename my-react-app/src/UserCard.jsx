import React from "react";
import "../src/assets/css/UserCard.css"; // Importing CSS
import Navbar from "./Navbar";

function UserCard({ name, email }) {
  return (
    <div className="container">
      <Navbar />
      <div className="heading">User Info</div>
      <div className="form">
        <input className="input" type="text" value={name} readOnly />
        <input className="input" type="email" value={email} readOnly />
      </div>
    </div>
  );
}

export default UserCard;
