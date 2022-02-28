import { useRef } from "react";
import Header from "./Components/Header";
import AboutUs from "./Panels/AboutUs/AboutUs";
import MainPanel from "./Panels/MainPanel/MainPanel";
import Waitlist from "./Panels/Waitlist/Waitlist";

function App() {
  const mainPanelRef = useRef<null | HTMLDivElement>(null);
  const aboutUsRef = useRef<null | HTMLDivElement>(null);
  const waitlistRef = useRef<null | HTMLDivElement>(null);

  const onScroll = (event: any) => {
    if (mainPanelRef.current && event.target.id === "logo") {
      mainPanelRef.current.scrollIntoView({
        behavior: "smooth",
      });
    } else if (
      aboutUsRef.current &&
      (event.target.id === "about-us" || event.target.id === "About Lyfcare")
    ) {
      aboutUsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (
      waitlistRef.current &&
      (event.target.id === "waitlist" ||
        event.target.id === "Get on the waitlist")
    ) {
      waitlistRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header scrollToPanel={onScroll}></Header>
      <div ref={mainPanelRef}>
        <MainPanel></MainPanel>
      </div>
      <div ref={aboutUsRef}>
        <AboutUs></AboutUs>
      </div>
      <div ref={waitlistRef}>
        <Waitlist></Waitlist>
      </div>
    </>
  );
}

export default App;
