import { memo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = memo(({ className = "" }) => {
  return (
    <section className={`survey-content-wrapper ${className}`}>
      <div className="survey-content">
        <div className="survey-prompt">
          <div className="survey-button">
            <div className="join-revolution-wrapper">
              <div className="join-revolution-wrapper">
                <h1 className="join-the-pr">
                  Join the PR revolution. Be part of the future with our
                  AI-driven software.
                </h1>
              </div>
            </div>
            <button className="survey-button-container">
              <div className="take-survey">Take Survey</div>
            </button>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-quotes-wrapper">
              <div className="testimonial-quotes">
                <img
                  className="quote-left-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-1448@2x.png"
                />
                <img
                  className="quote-right-icon"
                  alt=""
                  src="/quote-right@2x.png"
                />
              </div>
            </div>
            <div className="testimonial-content-inner">
              <div className="rectangle-container">
                <img
                  className="frame-child2"
                  loading="lazy"
                  alt=""
                  src="/rectangle-1448-1@2x.png"
                />
                <img
                  className="frame-child3"
                  alt=""
                  src="/rectangle-1450-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="social-proof-icons">
            <img
              className="icon-one"
              loading="lazy"
              alt=""
              src="/rectangle-1447@2x.png"
            />
            <div className="icon-two" />
            <img className="icon-three" alt="" src="/rectangle-1446-1@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
