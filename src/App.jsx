import React, { useRef } from "react";
import AnalyticsNew from "./components/analyticsNew";
import HeroNew from "./components/heroNew";
import FooterNew from "./components/footerNew";
import NewNavbar from "./components/newnavbar";
import NewAutomation from "./components/NewAutomation";
import AiAgents from "./components/AiAgents";
import UseCase from "./components/useCase";

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

      <HeroNew />

      <div ref={newAutomationRef}>
        <NewAutomation /> {/* Render the NewAutomation component */}
      </div>

      <AiAgents />

      <div ref={anlyticViewRef}>
        <AnalyticsNew /> {/* Render the AnlyticView component */}
      </div>

      <div ref={useCaseRef}>
        <UseCase />
      </div>

      <FooterNew />
    </div>
  );
};

export default App;
