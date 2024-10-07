import { memo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = memo(({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="value-proposition-parent">
        <div className="value-proposition">
          <div className="value-proposition-content">
            <div className="value-proposition-title-parent">
              <div className="value-proposition-title">
                <h1 className="why-grittypr">Why GrittyPR?</h1>
              </div>
              <div className="we-know-how">
                We know how traditional public relations methods are often
                complex, time-consuming, and inaccessible to many, resulting in
                limited reach and impact. Whether you’re building strong brand
                reputation, generating leads, or looking to navigate and
                leverage emerging media channels to connect with your target
                audience, we see you and we’ve got you.
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <button className="feature-list">
            <div className="pr-software">PR Software</div>
          </button>
          <div className="feature-list1">
            <div className="ai-driven">AI-Driven</div>
          </div>
          <div className="feature-details">
            <div className="feature-one">
              <div className="feature-one-title">
                <div className="ai-driven">Reputation Management</div>
              </div>
            </div>
            <div className="feature-two-title">
              <div className="ai-driven">Media Relations</div>
            </div>
            <div className="feature-three">
              <div className="feature-three-child" />
              <div className="ellipse-parent">
                <div className="ellipse-div" />
                <div className="ellipse-group">
                  <div className="frame-child1" />
                  <img
                    className="rectangle-icon1"
                    loading="lazy"
                    alt=""
                    src="/rectangle@2x.png"
                  />
                  <img
                    className="rectangle-icon2"
                    alt=""
                    src="/rectangle-1@2x.png"
                  />
                </div>
                <img
                  className="rectangle-icon3"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2@2x.png"
                />
              </div>
              <img
                className="rectangle-icon4"
                loading="lazy"
                alt=""
                src="/rectangle-3@2x.png"
              />
              <img
                className="rectangle-icon5"
                loading="lazy"
                alt=""
                src="/rectangle-4@2x.png"
              />
              <img
                className="rectangle-icon6"
                loading="lazy"
                alt=""
                src="/rectangle-5@2x.png"
              />
            </div>
          </div>
          <button className="feature-list2">
            <div className="pr-software">Storytelling</div>
          </button>
        </div>
      </div>
    </section>
  );
});

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
