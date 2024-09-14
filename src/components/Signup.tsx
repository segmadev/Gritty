import { FunctionComponent } from "react";

export type SignupType = {
  className?: string;
};

const Signup: FunctionComponent<SignupType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-13xl text-white font-avenir-next-cyr mq825:pb-[52px] mq825:box-border ${className}`}
    >
      <div className="w-[1440px] bg-primary-1 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[31px] pb-[0.5px] pl-[736px] pr-[100px] box-border gap-[262px] max-w-full z-[1] mq450:gap-[33px] mq450:pl-5 mq450:box-border mq825:gap-[65px] mq825:pl-[184px] mq825:pr-[25px] mq825:box-border mq1400:gap-[131px] mq1400:flex-wrap mq1400:pl-[368px] mq1400:pr-[50px] mq1400:box-border">
        <div className="ml-[-840px] h-[429.5px] relative min-w-[578px] shrink-0 max-w-full mq1400:flex-1 mq1400:min-w-full">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-dodgerblue w-[393px] h-[335px]" />
          <div className="absolute top-[103px] left-[163px] rounded-xl bg-dodgerblue w-[415px] h-[252px] z-[1]" />
          <img
            className="absolute top-[52.4px] left-[30.2px] rounded-xl w-[499.4px] h-[353.3px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/rectangle-1446@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[62.5px] px-0 pb-0 box-border max-w-full mq1400:flex-1 mq1400:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-16 shrink-0 mq450:gap-4 mq825:gap-8">
            <div className="self-stretch flex flex-col items-start justify-start gap-6">
              <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-bold font-inherit mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
                Let’s Reimagine Public Relations Together!
              </h1>
              <div className="self-stretch relative text-base leading-[185%]">
                Join the waitlist and stand a chance to win $50 when you
                complete our survey
              </div>
            </div>
            <div className="self-stretch rounded-31xl bg-white border-lightgray border-[1px] border-solid overflow-hidden flex flex-row items-start justify-between py-0 pl-[30px] pr-0.5 gap-5 text-base text-color-grey-60 mq825:flex-wrap">
              <div className="w-[121px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[-0.29px] leading-[26px] font-medium">
                  Join the waitlist
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-6 px-[103px] bg-primary-2 rounded-31xl flex flex-row items-start justify-center hover:bg-orangered mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 relative text-xl tracking-[-0.32px] leading-[28px] font-avenir-next-cyr text-background text-center inline-block min-w-[80px]">
                  Sign Up
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
