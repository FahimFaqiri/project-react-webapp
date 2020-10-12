import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Footer titel</p>
        <p className="footer-subscription-text">Subtitel</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Je Email"
            />
            <Button buttonStyle="btn--outline">Doe iets</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Footer</h2>
            <Link to="/sign-up">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
          </div>
          <div className="footer-link-items">
            <h2>Footer</h2>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Footer</h2>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
          </div>
          <div className="footer-link-items">
            <h2>Footer</h2>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
            <Link to="/">Links</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              LAVISH
            </Link>
          </div>
          <small className="website-rights">LAVISH © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
