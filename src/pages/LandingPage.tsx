import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Signup from "../components/Signup";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent from "../components/GroupComponent";
import FooterContent from "../components/FooterContent";
import CopyrightAndLegal from "../components/CopyrightAndLegal";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[45px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="self-stretch flex flex-col items-start justify-start pt-[79.5px] pb-[80.5px] pl-[357px] pr-[356px] box-border gap-6 bg-[url('/public/call-to-action@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-13xl text-gray-300 font-avenir-next-cyr mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[178px] mq825:pr-[178px] mq825:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[182px] pr-[181px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[91px] mq825:pr-[90px] mq825:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[40px] font-normal font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
            <p className="m-0">Your Story, Amplified</p>
          </h1>
        </div>
        <div className="h-[71px] relative text-base leading-[185%] text-black text-center inline-block shrink-0">
          <p className="m-0">
            We’ll equip you with the tools and knowledge to confidently navigate
            the complexities of public relations and achieve your communication
            goals.
          </p>
        </div>
      </section>
      <Signup />
      <FrameComponent3 />
      <FrameComponent4 />
      <div className="w-[515.2px] h-[431.6px] relative rounded-t-215xl rounded-b-none bg-aliceblue [transform:_rotate(-180deg)] hidden max-w-full" />
      <FrameComponent5 />
      <GroupComponent />
      <section className="w-[1359.6px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-11 max-w-full mq825:gap-[22px]">
          <FooterContent />
          <CopyrightAndLegal />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
