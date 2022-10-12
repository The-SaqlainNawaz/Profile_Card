import React from "react";
import "./style.css";
import image from "../images/profileimage.jpg";

export default function Info() {
  return (
    <div>
      <img src={image} alt="ProfileImage" className="profile-image"></img>
      <h1 className="Name">Saqlain Nawaz</h1>
      <h3 className="F-Dev">Front End Developer</h3>
      <small className="gmail">devsaqlainnawaz@gmail.com</small>
      <div className="btn-grid">
        <button className="email-icon">Email</button>
        <button className="link-icon">Linkdin</button>
      </div>
    </div>
  );
}
