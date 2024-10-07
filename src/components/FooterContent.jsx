import { memo } from "react";
import PropTypes from "prop-types";
import "./FooterContent.css";

const FooterContent = memo(({ className = "" }) => {
  return (
    <div className={`footer-content ${className}`}>
      <div className="footer-columns">
        <div className="company-info">
          <img
            className="gritty-pr-logo-2-1"
            loading="lazy"
            alt=""
            src="/gritty-pr-logo-2-1@2x.png"
          />
          <div className="lorem-ipsum-dolor">
            Empower your brand and tell your story with our user-friendly
            AI-driven PR platform.
          </div>
        </div>
        <div className="social-links">
          <div className="follow-us">Follow Us</div>
          <div className="social-icons">
            <div className="platform-icons">
              <img
                className="facebook-icon"
                loading="lazy"
                alt=""
                src="/001facebook.svg"
              />
              <div className="facebook">Facebook</div>
            </div>
            <div className="platform-icons1">
              <img
                className="twitter-icon"
                loading="lazy"
                alt=""
                src="/003twitter.svg"
              />
              <div className="twitter">Twitter</div>
            </div>
            <div className="platform-icons2">
              <img
                className="instagram-icon"
                loading="lazy"
                alt=""
                src="/004instagram@2x.png"
              />
              <div className="instagram">Instagram</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
