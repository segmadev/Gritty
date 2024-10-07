import { memo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = memo(
  ({
    className = "",
    group55092,
    development,
    ourTeamIsDiligentlyDeveloping,
  }) => {
    return (
      <div className={`frame-group ${className}`}>
        <img className="group-icon" loading="lazy" alt="" src={group55092} />
        <div className="stage-content">
          <div className="stage-details">
            <div className="development">
              <ol className="development1">
                <li>{development}</li>
              </ol>
            </div>
            <div className="our-team-is">{ourTeamIsDiligentlyDeveloping}</div>
          </div>
        </div>
      </div>
    );
  }
);

FrameComponent.propTypes = {
  className: PropTypes.string,
  group55092: PropTypes.string,
  development: PropTypes.string,
  ourTeamIsDiligentlyDeveloping: PropTypes.string,
};

export default FrameComponent;
