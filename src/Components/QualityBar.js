import PropTypes from "prop-types";
import React from "react";

import { BarText } from "./BarText";
import "./Components.css"

export const QualityBar = ({aqi}) => {
  return (
    <div className="flex flex-col w-full items-start gap-2 relative flex-[0_0_auto] px-1">
        <div className="relative self-stretch w-full h-3 bg-[#24242480] rounded-full overflow-hidden">
          <div className="bar w-full h-full transition-all ease-in-out duration-700 [background:linear-gradient(90deg,rgb(0,153,102)_0%,rgb(255,222,51)_20%,rgb(255,153,51)_40%,rgb(204,0,51)_60%,rgb(102,0,153)_80%,rgb(126,0,35)_100%)] bg-si" style={{ '--width': `${(Math.min(aqi, 300)/(300))*100}%` }}/>
        </div>
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <BarText className="!flex-[0_0_auto]" ica={"0"} />
          <BarText className="!flex-[0_0_auto]" ica={"300+"} />
        </div>
      </div>
  );
};

QualityBar.propTypes = {
  aqi: PropTypes.any,
};
