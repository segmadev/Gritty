import { FunctionComponent } from "react";

export type FooterContentType = {
  className?: string;
};

const FooterContent: FunctionComponent<FooterContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-mini text-black font-avenir-next-cyr ${className}`}
    >
      <div className="w-[1239.6px] flex flex-row items-center justify-between max-w-full gap-5 mq825:flex-wrap">
        <div className="w-[327px] flex flex-col items-start justify-start gap-6 max-w-full mq825:flex-1">
          <img
            className="w-[206px] h-[37px] relative object-cover"
            loading="lazy"
            alt=""
            src="/gritty-pr-logo-2-1@2x.png"
          />
          <div className="relative leading-[160%]">
            Empower your brand and tell your story with our user-friendly
            AI-driven PR platform.
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-5 px-0 box-border gap-7 max-w-full text-mid text-secondary mq450:flex-wrap">
          <div className="relative tracking-[-0.23px] inline-block min-w-[76px]">
            Follow Us
          </div>
          <div className="flex-1 flex flex-row items-center justify-center gap-[17px] min-w-[203px] text-mini text-darkslategray-200">
            <div className="flex-[0.9406] flex flex-row items-center justify-start py-0 pl-0 pr-1.5 gap-4">
              <img
                className="h-[19.8px] w-[9.9px] relative"
                loading="lazy"
                alt=""
                src="/001facebook.svg"
              />
              <div className="relative leading-[160%] inline-block min-w-[69px]">
                Facebook
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[11px]">
              <img
                className="h-[15.9px] w-[19.6px] relative"
                loading="lazy"
                alt=""
                src="/003twitter.svg"
              />
              <div className="relative leading-[160%] inline-block min-w-[47px]">
                Twitter
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center gap-2.5">
              <img
                className="h-5 w-5 relative object-cover"
                loading="lazy"
                alt=""
                src="/004instagram@2x.png"
              />
              <div className="relative leading-[160%] inline-block min-w-[70px]">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
