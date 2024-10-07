import { memo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = memo(({ className = "" }) => {
  return (
    <section className={`feedback-container-wrapper ${className}`}>
      <div className="feedback-container">
        <div className="feedback-content">
          <div className="quote-icon" />
          <div className="gritty-logo-container">
            <img
              className="gritty-feedback-logo"
              alt=""
              src="/gritty-feedback-logo@2x.png"
            />
            <img
              className="gritty-pr-logo-1-1"
              loading="lazy"
              alt=""
              src="/gritty-pr-logo-1-1@2x.png"
            />
          </div>
        </div>
        <div className="feedback-benefits">
          <div className="benefit-description">
            <h1 className="whats-in-it">What’s in it for You?</h1>
            <div className="benefit-list">
              <div className="benefit-highlight" />
              <div className="early-access-container">
                <div className="early-access">Early Access</div>
                <div className="be-among-the">
                  Be among the first to experience our new AI-driven PR software
                  solution and enjoy insider benefits.
                </div>
              </div>
              <div className="benefit-items">
                <b className="shape-the-future">Shape the Future</b>
                <div className="your-feedback-matters">
                  Your feedback matters! Help us tailor our product to your
                  needs and influence the future of public relations technology.
                </div>
              </div>
              <div className="early-access-container">
                <div className="shape-the-future">Exclusive Rewards</div>
                <div className="be-among-the">
                  When you complete the survey, you stand a chance to win $50
                  for being part of our early adopter community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
