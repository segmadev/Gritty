import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1375.7px] flex flex-row items-start justify-center pt-0 px-5 pb-[64.2px] box-border max-w-full text-left text-13xl text-gray-300 font-avenir-next-cyr mq450:pb-[42px] mq450:box-border ${className}`}
    >
      <div className="w-[1175.7px] flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[89.5px] px-0 pb-0 box-border max-w-full lg:flex-1 mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="w-[657px] flex flex-col items-start justify-start py-0 px-0 box-border gap-6 max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                <h1 className="m-0 w-[722px] relative text-inherit leading-[40px] font-normal font-inherit inline-block max-w-[110%] mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
                  Why GrittyPR?
                </h1>
              </div>
              <div className="w-[721px] relative text-base leading-[185%] text-black inline-block max-w-[110%]">
                We know how traditional public relations methods are often
                complex, time-consuming, and inaccessible to many, resulting in
                limited reach and impact. Whether you’re building strong brand
                reputation, generating leads, or looking to navigate and
                leverage emerging media channels to connect with your target
                audience, we see you and we’ve got you.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0 pb-[5.3px] pl-[47px] pr-[7px] box-border relative min-w-[417.7px] max-w-full text-sm text-secondary lg:flex-1 mq450:pl-5 mq450:box-border mq825:min-w-full">
          <button className="cursor-pointer [border:none] py-[16.4px] px-3.5 bg-white !m-[0] absolute bottom-[148px] left-[0px] shadow-[-6.8px_6.8px_20.5px_rgba(22,_22,_22,_0.05)] rounded-mid-1 flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-gainsboro-300">
            <div className="relative text-sm tracking-[0.82px] leading-[150%] font-avenir-next-cyr text-secondary text-left">
              PR Software
            </div>
          </button>
          <div className="!m-[0] absolute bottom-[0px] left-[110px] shadow-[-6.8px_6.8px_20.5px_rgba(22,_22,_22,_0.05)] rounded-mid-1 bg-white flex flex-row items-start justify-start py-[16.4px] px-3.5 z-[2]">
            <div className="relative tracking-[0.82px] leading-[150%]">
              AI-Driven
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start pt-1.5 px-[7px] pb-[26.7px] relative gap-[222.2px] mq450:gap-[111px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[46px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="shadow-[-6.8px_6.8px_20.5px_rgba(22,_22,_22,_0.05)] rounded-mid-1 bg-white flex flex-row items-start justify-start py-[16.4px] px-3.5 z-[2]">
                <div className="relative tracking-[0.82px] leading-[150%]">
                  Reputation Management
                </div>
              </div>
            </div>
            <div className="shadow-[-6.8px_6.8px_20.5px_rgba(22,_22,_22,_0.05)] rounded-mid-1 bg-white flex flex-row items-start justify-start py-[16.4px] px-3.5 z-[3]">
              <div className="relative tracking-[0.82px] leading-[150%]">
                Media Relations
              </div>
            </div>
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[-1.3px] bottom-[0px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] border-orange border-[0px] border-solid box-border w-full h-full" />
              <div className="absolute top-[36.9px] left-[37px] w-[288.6px] h-[288.6px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] border-darkorange border-[0px] border-solid box-border w-full h-full z-[1]" />
                <div className="absolute top-[37px] left-[36.9px] w-[214.8px] h-[214.8px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] border-primary-2 border-[0px] border-solid box-border w-full h-full z-[2]" />
                  <img
                    className="absolute top-[148.1px] left-[1.4px] rounded-15xl-2 w-[34.2px] h-[34.2px] object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/rectangle@2x.png"
                  />
                  <img
                    className="absolute top-[154.6px] left-[168.2px] rounded-15xl-2 w-[34.2px] h-[34.2px] object-cover z-[3]"
                    alt=""
                    src="/rectangle-1@2x.png"
                  />
                </div>
                <img
                  className="absolute top-[22.6px] left-[227.7px] rounded-15xl-2 w-[47.9px] h-[47.9px] object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2@2x.png"
                />
              </div>
              <img
                className="absolute top-[239.4px] left-[325.6px] rounded-15xl-2 w-[38.2px] h-[38.2px] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-3@2x.png"
              />
              <img
                className="absolute top-[261.3px] left-[4.8px] rounded-15xl-2 w-[47.9px] h-[47.9px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-4@2x.png"
              />
              <img
                className="absolute top-[119.7px] left-[28.7px] rounded-15xl-2 w-[34.2px] h-[34.2px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-5@2x.png"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[16.4px] px-3.5 bg-white !m-[0] absolute top-[128px] right-[0px] shadow-[-6.8px_6.8px_20.5px_rgba(22,_22,_22,_0.05)] rounded-mid-1 flex flex-row items-start justify-start z-[3] hover:bg-gainsboro-300">
            <div className="relative text-sm tracking-[0.82px] leading-[150%] font-avenir-next-cyr text-secondary text-left">
              Storytelling
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
