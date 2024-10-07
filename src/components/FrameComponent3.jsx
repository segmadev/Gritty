import { memo } from "react";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = memo(({ className = "" }) => {
  return (
    <section className={`roadmap-content-wrapper ${className}`}>
      <div className="roadmap-content">
        <div className="roadmap-title-wrapper">
          <div className="roadmap-title">
            <div className="roadmap-heading">
              <h1 className="roadmap">Roadmap</h1>
            </div>
            <div className="our-journey-to">
              Our Journey to Revolutionize PR
            </div>
          </div>
        </div>
        <div className="roadmap-stages">
          <FrameComponent
            group55092="/group-55092@2x.png"
            development="Development"
            ourTeamIsDiligentlyDeveloping="Our team is diligently developing cutting-edge technology to revolutionize your public relations strategy. We're building and refining the robust infrastructure that will power your PR success."
          />
          <div className="stage-two">
            <div className="stage-two-content">
              <div className="stage-two-title">
                <div className="refining">
                  <ol className="refining1">
                    <li>Refining</li>
                  </ol>
                </div>
                <div className="were-building-an">
                  We're building an AI-powered PR platform designed to empower
                  everyone with professional-grade tools. Your insights are
                  crucial in shaping its future. Share your thoughts in our
                  survey and help us create a product that truly meets your
                  needs.
                </div>
              </div>
            </div>
            <img
              className="stage-two-child"
              loading="lazy"
              alt=""
              src="/group-55093@2x.png"
            />
          </div>
          <FrameComponent
            group55092="/group-55094@2x.png"
            development="Launch"
            ourTeamIsDiligentlyDeveloping="Experience the future of accessible PR as we prepare to unveil our full-scale product to the world."
          />
        </div>
      </div>
    </section>
  );
});

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
