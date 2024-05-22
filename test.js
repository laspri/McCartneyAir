import React from "react";
import { IndicadorIca } from "./IndicadorIca";
import { InfoMain } from "./InfoMain";
import { ItemLearn } from "./ItemLearn";

export const Iphone = () => {
  return (
    <div className="flex flex-col h-[844px] items-center gap-[30px] relative bg-[#111411] overflow-hidden">
      <div className="flex flex-col items-center gap-[37px] px-[25px] py-[30px] relative self-stretch w-full flex-[0_0_auto] rounded-[0px_0px_60px_60px] bg-[url(/frame-11.png)] bg-cover bg-[50%_50%]">
        <div className="flex w-[343px] items-start justify-between relative flex-[0_0_auto] ml-[-1.50px] mr-[-1.50px]">
          <InfoMain className="!flex-[0_0_auto]" primary="BOGOTÁ" secondary="COLOMBIA" />
          <InfoMain className="!flex-[0_0_auto]" primary="21 MAYO" secondary="2024" />
        </div>
        <div className="flex flex-col w-[122.69px] h-[137.62px] items-center justify-center relative shadow-[0px_0px_70px_#ffffff40]">
          <div className="relative w-fit ml-[-0.16px] mr-[-0.16px] [font-family:'Space_Mono-Bold',Helvetica] font-bold text-white text-[100px] text-right tracking-[0] leading-[90px] whitespace-nowrap">
            52
          </div>
          <div className="relative w-fit [font-family:'Space_Mono-Regular',Helvetica] font-normal text-white text-[25px] text-right tracking-[0] leading-[normal]">
            ICA*
          </div>
        </div>
        <p className="relative w-[300px] [font-family:'Metropolis-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]">
          <span className="[font-family:'Metropolis-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0]">
            Ahora es
          </span>
          <span className="[font-family:'Metropolis-SemiBold',Helvetica] font-semibold"> un buen día</span>
          <span className="[font-family:'Metropolis-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0]">
            {" "}
            para estar activo al aire libre.
          </span>
        </p>
      </div>
      <div className="flex flex-col w-[340px] items-start gap-[10px] relative flex-[0_0_auto]">
        <div className="relative self-stretch w-full h-[10.6px] mt-[-0.30px] ml-[-0.30px] mr-[-0.30px] bg-[#24242480] rounded-[999px] overflow-hidden">
          <div className="w-[87px] h-[10px] overflow-hidden">
            <div className="w-[343px] h-[10px] [background:linear-gradient(180deg,rgb(0,153,102)_0%,rgb(255,222,51)_20%,rgb(255,153,51)_40%,rgb(204,0,51)_60%,rgb(102,0,153)_80%,rgb(126,0,35)_100%)] bg-si" />
          </div>
        </div>
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <IndicadorIca className="!flex-[0_0_auto]" />
          <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Metropolis-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              +300 ICA
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[10px] px-[25px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Mono-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]">
          Conoce más
        </div>
        <ItemLearn
          className="!flex-[0_0_auto]"
          description="Explore air quality in your city and around the world. Air quality data, collaboration tools, and technology solutions"
          image="image.png"
          name="IQ Air"
        />
        <ItemLearn
          className="!flex-[0_0_auto]"
          description="Explore air quality in your city and around the world. Air quality data, collaboration tools, and technology solutions"
          image="image-13-2.png"
          name="IQ Air"
        />
        <ItemLearn
          className="!flex-[0_0_auto]"
          description="Explore air quality in your city and around the world. Air quality data, collaboration tools, and technology solutions"
          image="image-13-3.png"
          name="IQ Air"
        />
        <ItemLearn
          className="!flex-[0_0_auto]"
          description="Explore air quality in your city and around the world. Air quality data, collaboration tools, and technology solutions"
          image="image-13-4.png"
          imageClassName="!h-[32.38px]"
          name="IQ Air"
        />
        <ItemLearn
          className="!flex-[0_0_auto]"
          description="Explore air quality in your city and around the world. Air quality data, collaboration tools, and technology solutions"
          image="image-13-5.png"
          imageClassName="!mt-[-1262.62px] !ml-[-1699.00px]"
          name="IQ Air"
        />
      </div>
    </div>
  );
};
