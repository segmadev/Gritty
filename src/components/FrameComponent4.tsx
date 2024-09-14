import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-13xl text-black font-avenir-next-cyr mq825:pb-[65px] mq825:box-border ${className}`}
    >
      <div className="w-[1440px] flex flex-row items-start justify-start py-[46px] px-[100px] box-border gap-[117px] bg-[url('/public/survey-content@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq825:gap-[29px] mq825:py-[30px] mq825:px-[25px] mq825:box-border mq1400:gap-[58px] mq1400:flex-wrap mq1400:justify-center mq1400:pl-[50px] mq1400:pr-[50px] mq1400:box-border">
        <div className="flex flex-col items-start justify-start pt-[122.5px] px-0 pb-0 box-border max-w-full lg:min-w-full mq1400:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <h1 className="m-0 w-[657px] relative text-inherit leading-[40px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
                  Join the PR revolution. Be part of the future with our
                  AI-driven software.
                </h1>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-[49px] bg-primary-1 rounded-31xl flex flex-row items-center justify-center hover:bg-cornflowerblue">
              <div className="flex-1 relative text-lg font-avenir-next-cyr text-white text-center inline-block min-w-[100px]">
                Take Survey
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-7 min-w-[620.4px] max-w-full lg:min-w-full mq825:flex-wrap mq1400:flex-1">
          <div className="flex flex-col items-start justify-start gap-[17.3px] min-w-[148.4px] mq825:flex-1">
            <div className="self-stretch h-[166.4px] flex flex-row items-start justify-start relative shrink-0">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px]">
                <img
                  className="absolute top-[44.6px] left-[15.3px] rounded-lgi-3 w-[117.2px] h-[121.8px] object-contain"
                  loading="lazy"
                  alt=""
                  src="/rectangle-1448@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] rounded-mini w-[148.4px] h-[152.4px] object-contain z-[1]"
                  alt=""
                  src="/quote-right@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch h-[225.3px] flex flex-row items-start justify-start relative shrink-0">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute top-[24.7px] left-[15.2px] rounded-lgi-3 w-[117.6px] h-[200.6px] object-contain"
                  loading="lazy"
                  alt=""
                  src="/rectangle-1448-1@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] rounded-mini w-[148.4px] h-[211px] object-contain z-[1]"
                  alt=""
                  src="/rectangle-1450-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="h-[316.2px] relative min-w-[389.6px] max-w-full mq825:flex-1 mq825:min-w-full">
            <img
              className="absolute top-[34.6px] left-[18px] rounded-13xl-6 w-[369.4px] h-[281.6px] object-contain"
              loading="lazy"
              alt=""
              src="/rectangle-1447@2x.png"
            />
            <div className="absolute top-[315.4px] left-[443.1px] rounded-sm-3 bg-whitesmoke-200 w-[329.5px] h-[280.9px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[418.7px] h-[296.2px] object-contain z-[2]"
              alt=""
              src="/rectangle-1446-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
