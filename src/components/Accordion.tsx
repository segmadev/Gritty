import { FunctionComponent } from "react";

export type AccordionType = {
  className?: string;
};

const Accordion: FunctionComponent<AccordionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch border-secondary border-b-[1px] border-solid flex flex-row items-center justify-between pt-0 px-0 pb-[38px] opacity-[0.5] gap-5 ${className}`}
    >
      <input
        className="w-[218px] [border:none] [outline:none] font-avenir-next-cyr text-xl bg-[transparent] relative leading-[32px] text-gray-200 text-left inline-block p-0 mq450:text-base mq450:leading-[26px]"
        placeholder="Who Can Use GrittyPR? "
        type="text"
      />
      <img
        className="h-6 w-6 relative object-contain"
        alt=""
        src="/bxchevronright-1@2x.png"
      />
    </div>
  );
};

export default Accordion;
