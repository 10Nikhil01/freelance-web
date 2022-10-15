import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "spaceBetween",
        gap: "50px",
        margin: "50px auto",
        width: "100%",
      }}
    >
      <div className="subscribe">
        <h3>
          Never Want to Miss <br />
          Any <span>Job News?</span>
        </h3>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footers">
        <h3>
          <span>Staffing</span> Solutions
        </h3>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <hr />
      <small>@staffingSolutions All right reserved.</small>
    </div>
  );
};

export default Footer;
