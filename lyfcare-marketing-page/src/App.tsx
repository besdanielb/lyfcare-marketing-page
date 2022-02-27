import Header from "./Components/Header";
import AboutUs from "./Panels/AboutUs/AboutUs";
import MainPanel from "./Panels/MainPanel/MainPanel";
import Waitlist from "./Panels/Waitlist/Waitlist";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainPanel></MainPanel>
      <AboutUs></AboutUs>
      <Waitlist></Waitlist>
    </div>
  );
}

export default App;
