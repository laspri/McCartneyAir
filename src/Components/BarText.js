import PropTypes from "prop-types";
import React from "react";

export const BarText = ({ica="300"}) => {
  return (
    <p className="inline-flex items-center justify-center relative text-sans font-normal text-white text-base whitespace-nowrap">
        <span className="font-bold">{ica}</span>
        &nbsp;ICA
    </p>
  );
};

BarText.propTypes = {
  ica: PropTypes.string,
};
