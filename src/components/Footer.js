import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <TwitterIcon fontSize="large" className="footer-icon" />
        <FacebookIcon fontSize="large" className="footer-icon" />
        <InstagramIcon fontSize="large" className="footer-icon" />
      </div>
      <div className="footer-text">
        <p>Privacy</p>
        <p>Terms of use</p>
      </div>
    </div>
  );
}

export default Footer;
