import PropTypes from "prop-types";
import React from "react";

import './Components.css'

export const HeaderInfo = ({
  secondary = "SECONDARY TEXT",
  primary = "PRIMARY TEXT",
  isRight = false,
}) => {
  const alignment = isRight ? "text-right" : "text-left";
  return (
    <div
      className={`inline-flex flex-col relative ${isRight ? "items-end" : "items-start"}`}>
      <p className={`textField font-semibold text-xl ${alignment}`}>
        {primary}
      </p>
      <p className={`textField font-medium text-base ${alignment}`}>
        {secondary}
      </p>
    </div>
  );
};

HeaderInfo.propTypes = {
  secondary: PropTypes.any,
  primary: PropTypes.any,
  isRight: PropTypes.bool,
};
