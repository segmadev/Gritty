import { FunctionComponent } from "react";
import Accordion from "./Accordion";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`ml-[-1px] mb-[87.5px] self-stretch flex flex-row items-start justify-center pt-[121.5px] pb-[5px] pl-[21px] pr-5 box-border relative max-w-full text-center text-13xl text-gray-300 font-avenir-next-cyr lg:pt-[79px] lg:pb-5 lg:box-border mq825:pt-[51px] mq825:box-border ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-54996.svg"
      />
      <div className="w-[724px] flex flex-col items-center justify-start gap-[68px] max-w-full z-[1] mq450:gap-[17px] mq825:gap-[34px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[40px] font-bold font-inherit mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
          Frequently Asked Questions
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[245px] box-border min-h-[733px] text-left text-xl text-gray-200 mq825:gap-5 mq825:pb-[159px] mq825:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-10 mq825:gap-5">
            <div className="self-stretch border-darkslategray-100 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-[38px]">
              <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-6 gap-5">
                <div className="relative leading-[32px] mq450:text-base mq450:leading-[26px]">
                  How does GrittyPR work?
                </div>
                <img
                  className="h-6 w-6 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/bxchevronright@2x.png"
                />
              </div>
              <div className="relative text-base leading-[150%] text-gray-100">
                GrittyPR works by empowering users to manage their public
                relations efforts efficiently and effectively. First, you
                identify your communication goals. Then, subscribe to our
                affordable platform and leverage our user-friendly tools to
                craft impactful stories, manage media relations, and schedule
                social media content. Our platform allows you to execute your PR
                tactics seamlessly by managing media lists, distributing press
                releases, and overseeing social media campaigns. Finally,
                monitor your campaign's performance with real-time data to
                optimize your strategy for maximum impact.
              </div>
            </div>
            <div className="self-stretch border-secondary border-b-[1px] border-solid flex flex-row items-center justify-between pt-0 px-0 pb-[38px] opacity-[0.5] gap-5">
              <div className="relative leading-[32px] mq450:text-base mq450:leading-[26px]">
                What are the benefits of using GrittyPR?
              </div>
              <img
                className="h-6 w-6 relative object-contain"
                alt=""
                src="/bxchevronright-1@2x.png"
              />
            </div>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
