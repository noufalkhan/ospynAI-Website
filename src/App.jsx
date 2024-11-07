import React, { useRef } from "react";
import AnalyticsNew from "./components/analyticsNew";
import HeroNew from "./components/heroNew";
import FooterNew from "./components/footerNew";
import NewNavbar from "./components/newnavbar";
import NewAutomation from "./components/NewAutomation";
import AiAgents from "./components/AiAgents";
import UseCase from "./components/useCase";
import HeroAnimate from "./components/HeroAnimate";

const App = () => {
  // Create refs for all relevant sections
  const useCaseRef = useRef(null);
  const anlyticViewRef = useRef(null);
  const newAutomationRef = useRef(null); // Ref for NewAutomation

  return (
    <div>
      <NewNavbar 
        useCaseRef={useCaseRef} 
        anlyticViewRef={anlyticViewRef} 
        newAutomationRef={newAutomationRef} // Pass the NewAutomation ref
      />

<HeroAnimate />
      {/* <HeroNew /> */}

      <div ref={useCaseRef}>
      <NewAutomation />

        {/* <UseCase /> */}
      </div>

      {/* <AiAgents /> */}

      <div ref={anlyticViewRef}>
        <AnalyticsNew /> {/* Render the AnlyticView component */}
      </div>

      <div ref={newAutomationRef}>
        
        <UseCase />
          {/* <NewAutomation /> Render the NewAutomation component */}
        </div>
     

      <FooterNew />
    </div>
  );
};

export default App;
