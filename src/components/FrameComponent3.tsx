import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[79px] pl-5 pr-[22px] box-border max-w-full text-center text-13xl text-gray-300 font-avenir-next-cyr mq825:pb-[51px] mq825:box-border ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-16 max-w-full mq450:gap-4 mq825:gap-8">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5">
          <div className="w-[260px] flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[11px]">
              <h1 className="m-0 flex-1 relative text-inherit leading-[40px] font-bold font-inherit mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
                Roadmap
              </h1>
            </div>
            <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] text-black">
              Our Journey to Revolutionize PR
            </div>
          </div>
        </div>
        <div className="overflow-x-auto flex flex-row items-start justify-start gap-8 max-w-full text-left text-xl text-black mq825:gap-4">
          <FrameComponent
            group55092="/group-55092@2x.png"
            development="Development"
            ourTeamIsDiligentlyDeveloping="Our team is diligently developing cutting-edge technology to revolutionize your public relations strategy. We're building and refining the robust infrastructure that will power your PR success."
          />
          <div className="w-96 bg-whitesmoke-100 shrink-0 flex flex-col items-start justify-start pt-10 px-0 pb-px box-border gap-[26px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[60px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <div className="self-stretch relative mq450:text-base">
                  <ol className="m-0 font-inherit text-inherit pl-[27px]">
                    <li>Refining</li>
                  </ol>
                </div>
                <div className="relative text-base leading-[24px]">
                  We're building an AI-powered PR platform designed to empower
                  everyone with professional-grade tools. Your insights are
                  crucial in shaping its future. Share your thoughts in our
                  survey and help us create a product that truly meets your
                  needs.
                </div>
              </div>
            </div>
            <img
              className="w-[13px] h-[13px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/group-55093@2x.png"
            />
          </div>
          <FrameComponent
            group55092="/group-55094@2x.png"
            development="Launch"
            ourTeamIsDiligentlyDeveloping="Experience the future of accessible PR as we prepare to unveil our full-scale product to the world."
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
