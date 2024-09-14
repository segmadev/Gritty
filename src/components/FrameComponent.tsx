import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  group55092?: string;
  development?: string;
  ourTeamIsDiligentlyDeveloping?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  group55092,
  development,
  ourTeamIsDiligentlyDeveloping,
}) => {
  return (
    <div
      className={`w-96 bg-whitesmoke-100 shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[87px] box-border gap-[27px] max-w-full text-left text-xl text-black font-avenir-next-cyr ${className}`}
    >
      <img
        className="w-[13px] h-[13px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src={group55092}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[60px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-2">
          <div className="self-stretch relative mq450:text-base">
            <ol className="m-0 font-inherit text-inherit pl-[27px]">
              <li>{development}</li>
            </ol>
          </div>
          <div className="relative text-base leading-[24px]">
            {ourTeamIsDiligentlyDeveloping}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
