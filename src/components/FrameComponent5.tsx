import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1397px] flex flex-row items-start justify-start pt-0 px-[57px] pb-[100px] box-border max-w-full text-left text-13xl text-gray-300 font-avenir-next-cyr mq450:pb-[42px] mq450:box-border mq825:pb-[65px] mq825:box-border mq1400:pl-7 mq1400:pr-7 mq1400:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
        <div className="h-[680px] relative min-w-[506px] max-w-full lg:flex-1 mq825:min-w-full">
          <div className="absolute top-[549px] left-[0px] rounded-[50%] bg-primary-2 w-[131px] h-[131px]" />
          <div className="absolute top-[0px] left-[43px] rounded-xl w-[463px] h-[635px] z-[1]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover"
              alt=""
              src="/gritty-feedback-logo@2x.png"
            />
            <img
              className="absolute top-[291px] left-[82px] w-[298px] h-[54px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/gritty-pr-logo-1-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[433px] flex flex-col items-start justify-start pt-[87px] px-0 pb-0 box-border max-w-full lg:flex-1 mq825:pt-[57px] mq825:box-border mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[46px] mq450:gap-[23px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[40px] font-bold font-inherit mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
              What’s in it for You?
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start relative z-[1] text-xl text-grey-1">
              <div className="w-1 h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-dropdown-demarcators" />
              <div className="self-stretch bg-white flex flex-col items-start justify-start py-5 pl-8 pr-0 gap-2 opacity-[0.5]">
                <div className="relative tracking-[0.01em] leading-[24px] inline-block min-w-[117px] mq450:text-base mq450:leading-[19px]">
                  Early Access
                </div>
                <div className="relative text-base tracking-[0.01em] leading-[24px]">
                  Be among the first to experience our new AI-driven PR software
                  solution and enjoy insider benefits.
                </div>
              </div>
              <div className="self-stretch bg-white border-primary-1 border-l-[4px] border-solid flex flex-col items-start justify-start py-5 pl-7 pr-0 gap-2 text-gray-300 font-gilroy">
                <b className="relative tracking-[0.01em] leading-[24px] mq450:text-base mq450:leading-[19px]">
                  Shape the Future
                </b>
                <div className="relative text-base tracking-[0.01em] leading-[24px] font-avenir-next-cyr text-black">
                  Your feedback matters! Help us tailor our product to your
                  needs and influence the future of public relations technology.
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-col items-start justify-start py-5 pl-8 pr-0 gap-2 opacity-[0.5]">
                <div className="relative tracking-[0.01em] leading-[24px] mq450:text-base mq450:leading-[19px]">
                  Exclusive Rewards
                </div>
                <div className="relative text-base tracking-[0.01em] leading-[24px]">
                  When you complete the survey, you stand a chance to win $50
                  for being part of our early adopter community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
