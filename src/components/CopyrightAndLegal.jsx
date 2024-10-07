import { memo } from "react";
import PropTypes from "prop-types";
import "./CopyrightAndLegal.css";

const CopyrightAndLegal = memo(({ className = "" }) => {
  return (
    <div className={`copyright-and-legal ${className}`}>
      <div className="legal-container">
        <div className="legal-content">
          <div className="copyright">
            <img
              className="copyright-child"
              loading="lazy"
              alt=""
              src="/group-54999.svg"
            />
          </div>
          <div className="copyright-2020">Copyright © 2024</div>
        </div>
      </div>
      <div className="legal-links">
        <div className="terms-conditions">{`Terms & Conditions`}</div>
        <div className="privacy-policy">Privacy Policy</div>
      </div>
    </div>
  );
});

CopyrightAndLegal.propTypes = {
  className: PropTypes.string,
};

export default CopyrightAndLegal;
