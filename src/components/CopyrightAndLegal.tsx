import { FunctionComponent } from "react";

export type CopyrightAndLegalType = {
  className?: string;
};

const CopyrightAndLegal: FunctionComponent<CopyrightAndLegalType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1230.8px] flex flex-row items-start justify-between gap-5 max-w-full text-left text-mini text-gray-400 font-avenir-next-cyr mq825:flex-wrap ${className}`}
    >
      <div className="w-[290.8px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start pt-[73px] px-0 pb-0">
            <img
              className="w-[58px] h-[58px] relative"
              loading="lazy"
              alt=""
              src="/group-54999.svg"
            />
          </div>
          <div className="relative tracking-[-0.2px] font-medium inline-block mix-blend-normal min-w-[123px]">
            Copyright © 2024
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[38px] text-gray-500 mq450:gap-[19px]">
        <div className="relative leading-[160%] font-medium">{`Terms & Conditions`}</div>
        <div className="relative leading-[160%] font-medium inline-block min-w-[93px]">
          Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default CopyrightAndLegal;
