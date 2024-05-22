import PropTypes from "prop-types";
import React from "react";

export const QualityCounter = ({number="..."}) => {
  return (
    <div className="inline-flex flex-col items-center justify-center relative drop-shadow-[0px_0px_70px_#ffffff40]">
      <div className="relative w-fit font-mono font-bold text-white text-8xl text-right whitespace-nowrap">
        {number}
      </div>
      <div className="relative w-fit font-mono font-normal text-white text-2xl text-right leading-[normal]">
        ICA*
      </div>
    </div>
  );
};

QualityCounter.propTypes = {
  count: PropTypes.any,
};