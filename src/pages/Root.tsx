import { FunctionComponent } from "react";

const Root: FunctionComponent = () => {
  return (
    <div className="w-full h-[952px] relative bg-royalblue overflow-hidden leading-[normal] tracking-[normal] text-left text-[64px] text-white font-avenir-next-cyr mq450:h-auto mq450:min-h-[952]">
      <div className="absolute top-[217px] left-[100px] w-[829px] flex flex-col items-start justify-start py-0 pl-0 pr-3.5 box-border gap-16 max-w-full z-[2]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[54px]">
          <h1 className="m-0 self-stretch h-[274px] relative text-inherit tracking-[-0.01em] leading-[150%] capitalize font-bold font-[inherit] inline-block shrink-0 mq450:text-[38px] mq450:leading-[58px] mq750:text-[51px] mq750:leading-[77px]">
            <p className="m-0">
              Africa's Leading AI-Driven PR Software for Visibility and
              Storytelling
            </p>
          </h1>
          <div className="self-stretch relative text-[24px] leading-[160%] mq450:text-[19px] mq450:leading-[31px]">
            We are on a mission to empower individuals and businesses to tell
            their stories, effectively position themselves, and elevate their
            brands through accessible and user-friendly AI-driven PR software.
          </div>
        </div>
        <div className="w-[555px] flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-5 box-border gap-8 max-w-full">
          <button className="cursor-pointer [border:none] py-6 px-16 bg-darkorange flex-1 rounded-31xl flex flex-row items-center justify-center box-border min-w-[170px] whitespace-nowrap hover:bg-orangered">
            <div className="flex-1 relative text-lg font-avenir-next-cyr text-background text-center">
              Join the Waitlist
            </div>
          </button>
          <button className="cursor-pointer border-background border-[1px] border-solid py-[22px] px-[63px] bg-[transparent] rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="w-[114px] relative text-lg font-avenir-next-cyr text-background text-center inline-block min-w-[114px]">
              Take a Survey
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[231px] left-[948px] w-[180px] h-[547px] flex flex-col items-start justify-start gap-6 z-[2]">
        <img
          className="self-stretch flex-1 relative rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-1451@2x.png"
        />
        <img
          className="self-stretch h-[143px] relative rounded-t-101xl rounded-br-101xl rounded-bl-none max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-1452@2x.png"
        />
      </div>
      <div className="absolute top-[231px] left-[1160px] w-[180px] h-[547px] flex flex-col items-start justify-start gap-6 z-[2]">
        <img
          className="self-stretch h-[143px] relative rounded-tl-101xl rounded-tr-none rounded-b-101xl max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-1452-1@2x.png"
        />
        <img
          className="self-stretch flex-1 relative rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-1451-1@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <img
          className="absolute top-[-142px] left-[-522px] w-[2440.3px] h-[1268px] overflow-hidden"
          alt=""
          src="/grid.svg"
        />
        <img
          className="absolute top-[80px] left-[-831.4px] w-[3439.7px] h-[855.1px] overflow-hidden z-[1]"
          alt=""
        />
        <img
          className="absolute top-[40px] left-[100px] w-[234px] h-10 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/gritty-pr-logo-3-2@2x.png"
        />
        <img
          className="absolute top-[186.6px] left-[934.5px] w-[57.4px] h-[61.1px] object-contain z-[3]"
          alt=""
          src="/highlight-05@2x.png"
        />
      </div>
    </div>
  );
};

export default Root;
