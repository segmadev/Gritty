import { memo } from "react";
import Accordion from "./Accordion";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = memo(({ className = "" }) => {
  return (
    <section className={`frame-container ${className}`}>
      <img className="frame-child4" alt="" src="/group-54996.svg" />
      <div className="f-a-q-container">
        <h1 className="frequently-asked-questions">
          Frequently Asked Questions
        </h1>
        <div className="f-a-q-accordion">
          <div className="f-a-q-items">
            <div className="accordion1">
              <div className="answer-content">
                <div className="what-makes-pandomzfx1">
                  How does GrittyPR work?
                </div>
                <img
                  className="bxchevron-right-icon1"
                  loading="lazy"
                  alt=""
                  src="/bxchevronright@2x.png"
                />
              </div>
              <div className="pandomzfx-academy-stands">
                GrittyPR works by empowering users to manage their public
                relations efforts efficiently and effectively. First, you
                identify your communication goals. Then, subscribe to our
                affordable platform and leverage our user-friendly tools to
                craft impactful stories, manage media relations, and schedule
                social media content. Our platform allows you to execute your PR
                tactics seamlessly by managing media lists, distributing press
                releases, and overseeing social media campaigns. Finally,
                monitor your campaign's performance with real-time data to
                optimize your strategy for maximum impact.
              </div>
            </div>
            <div className="accordion2">
              <div className="what-makes-pandomzfx1">
                What are the benefits of using GrittyPR?
              </div>
              <img
                className="bxchevron-right-icon1"
                alt=""
                src="/bxchevronright-1@2x.png"
              />
            </div>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
});

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
