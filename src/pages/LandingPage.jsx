import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Signup from "../components/Signup";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent from "../components/GroupComponent";
import FooterContent from "../components/FooterContent";
import CopyrightAndLegal from "../components/CopyrightAndLegal";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="call-to-action">
        <div className="call-to-action-content">
          <h1 className="your-story-amplified-container">
            <p className="your-story-amplified">Your Story, Amplified</p>
          </h1>
        </div>
        <div className="well-equip-you-container">
          <p className="your-story-amplified">
            We’ll equip you with the tools and knowledge to confidently navigate
            the complexities of public relations and achieve your communication
            goals.
          </p>
        </div>
      </section>
      <Signup />
      <FrameComponent3 />
      <FrameComponent4 />
      <div className="landing-page-child" />
      <FrameComponent5 />
      <GroupComponent />
      <section className="footer">
        <div className="footer-container">
          <FooterContent />
          <CopyrightAndLegal />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
