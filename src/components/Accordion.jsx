import { memo } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

const Accordion = memo(({ className = "" }) => {
  return (
    <div className={`accordion ${className}`}>
      <input
        className="what-makes-pandomzfx"
        placeholder="Who Can Use GrittyPR? "
        type="text"
      />
      <img
        className="bxchevron-right-icon"
        alt=""
        src="/bxchevronright-1@2x.png"
      />
    </div>
  );
});

Accordion.propTypes = {
  className: PropTypes.string,
};

export default Accordion;
