import React, { useState } from "react";
import Navbar from "./Navbar";
import "../src/assets/css/SignUp.css"; 

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${form.name}!`);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="heading">Sign Up</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
          required
          className="input"
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input className="login-button" type="submit" value="Sign Up" />
      </form>

      <div className="social-account-container">
  <span className="title">Or Sign up with</span>
  <div className="social-accounts">
   
    <button className="social-button google">
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 111 504 0 393 0 256S111 8 248 8c66.3 0 121.2 24.5 163.9 64.9l-66.4 63.3C322.3 111.4 288.1 96 248 96c-86.4 0-156.2 71-156.2 160s69.8 160 156.2 160c79.5 0 130.3-45.5 136-108.7H248v-87.3h240c2.2 12.7 3.9 24.9 3.9 41.8z"
        />
      </svg>
    </button>

   
    <button className="social-button apple">
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 384 512"
      >
        <path
          fill="currentColor"
          d="M318.7 268.7c-.2-36.7 16-64.5 48.6-84.9-18.3-26.4-45.8-41-84.5-44.5-35.5-2.9-74.4 20.9-88.3 20.9-15.1 0-51.6-19.9-79.8-19.9C62.2 140.3 0 188.2 0 277.9c0 31.7 5.9 64.5 17.8 98.3 15.8 44.6 73 153.3 133.1 151.3 31.4-.8 53.6-22.4 94.4-22.4 39.4 0 60.3 22.4 94.9 22.4 60.7-.9 113.9-99.7 129.3-144.5-82.3-32-81.6-120.7-50.8-162.3zM251.1 74c26.2-31.4 23.8-60.4 22.9-70.4-22 1.3-47.6 15.3-62.9 34-13.7 16.7-25.6 43.5-22.5 69.2 24 .5 48.4-12.3 62.5-32.8z"
        />
      </svg>
    </button>

   
    <button className="social-button twitter">
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M459.4 151.7c.3 4.1.3 8.3.3 12.6 0 129.5-98.5 278.8-278.8 278.8-55.4 0-107-16.2-150.5-44.1 7.7.9 15.4 1.4 23.6 1.4 46 0 88.4-15.7 122-42.4-43-1-79.3-29-91.7-67.8 6 .9 12 .9 18.4.9 8.9 0 17.8-1.2 25.9-3.5-45-9-78.8-48.8-78.8-96.4v-1.2c13.2 7.4 28.5 12 44.8 12.6-26.6-17.7-44.3-48.1-44.3-82.4 0-18.3 4.7-35.1 13.2-49.6 48.1 59.3 119.9 98.1 200.6 102.3-1.6-7.4-2.4-15.4-2.4-23.4 0-56.2 45.7-101.9 101.9-101.9 29.4 0 56 12.3 74.7 32.2 23.4-4.7 45.7-13.2 65.6-25.5-7.7 24.1-24.1 44.3-45.7 57.3 20.7-2.1 41-8 59.7-16.2-13.8 20.2-31.2 37.7-51.2 51.7z"
        />
      </svg>
    </button>
  </div>
</div>

      <span className="agreement">
        New User? Please
        <a href="#">Login</a>
      </span>
    </div>
    </>
  );
};

export default SignUp;
