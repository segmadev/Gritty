import { memo } from "react";
import PropTypes from "prop-types";
import "./Signup.css";

const Signup = memo(({ className = "" }) => {
  return (
    <section className={`signup ${className}`}>
      <div className="signup-content">
        <div className="signup-form">
          <div className="input-one" />
          <div className="input-two" />
          <img
            className="input-three-icon"
            loading="lazy"
            alt=""
            src="/rectangle-1446@2x.png"
          />
        </div>
        <div className="confirmation">
          <div className="confirmation-message">
            <div className="lets-reimagine-public-relatio-parent">
              <h1 className="lets-reimagine-public">
                Let’s Reimagine Public Relations Together!
              </h1>
              <div className="join-the-waitlist2">
                Join the waitlist and stand a chance to win $50 when you
                complete our survey
              </div>
            </div>
            <div className="input-container">
              <div className="placeholder-wrapper">
                <div className="placeholder">Join the waitlist</div>
              </div>
              <button className="button-wrapper">
                <div className="button-big">Sign Up</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Signup.propTypes = {
  className: PropTypes.string,
};

export default Signup;
