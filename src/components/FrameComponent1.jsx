import { memo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = memo(({ className = "" }) => {
  return (
    <section className={`landing-page-inner ${className}`}>
      <div className="content-right-parent">
        <div className="content-right">
          <div className="africas-leading-ai-driven-pr-group">
            <h1 className="africas-leading-ai-driven-container1">
              <p className="africas-leading-ai-driven1">
                Africa's Leading AI-Driven PR Software for Visibility and
                Storytelling
              </p>
            </h1>
            <h3 className="we-are-on1">
              We are on a mission to empower individuals and businesses to tell
              their stories, effectively position themselves, and elevate their
              brands through accessible and user-friendly AI-driven PR software.
            </h3>
          </div>
          <div className="buttons2">
            <button className="button-pair">
              <div className="join-the-waitlist1">Join the Waitlist</div>
            </button>
            <button className="button-pair1">
              <div className="take-a-survey1">Take a Survey</div>
            </button>
          </div>
        </div>
        <div className="content-columns">
          <img
            className="left-column-item"
            loading="lazy"
            alt=""
            src="/rectangle-1451@2x.png"
          />
          <img
            className="right-column-item"
            loading="lazy"
            alt=""
            src="/rectangle-1452@2x.png"
          />
        </div>
        <div className="content-columns1">
          <img
            className="content-columns-child"
            loading="lazy"
            alt=""
            src="/rectangle-1452-1@2x.png"
          />
          <img
            className="left-column-item"
            loading="lazy"
            alt=""
            src="/rectangle-1451-1@2x.png"
          />
        </div>
        <div className="lower-content">
          <img className="grid-icon1" alt="" src="/grid.svg" />
          <img className="stars-icon1" alt="" />
          <img
            className="gritty-pr-logo-3-21"
            loading="lazy"
            alt=""
            src="/gritty-pr-logo-3-2@2x.png"
          />
          <img
            className="highlight-05-icon1"
            alt=""
            src="/highlight-05@2x.png"
          />
        </div>
      </div>
    </section>
  );
});

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
