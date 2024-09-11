import React, { useRef, useCallback } from "react";
import AnalyticsNew from "./components/analyticsNew";
import HeroNew from "./components/heroNew";
import FooterNew from "./components/footerNew";
import Agent from "./components/agent";
import Navbar from "./components/navbar";
import Automation from "./components/automation";
import Demos from "./components/demos";
import UseCase from "./components/useCase";

const App = () => {
  const agentRef = useRef(null);
  const automationRef = useRef(null);
  const analyticsRef = useRef(null);

  const scrollToAgent = useCallback(() => {
    agentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToAutomation = useCallback(() => {
    automationRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToAnalyticsNew = useCallback(() => {
    analyticsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar
        scrollToAgent={scrollToAgent}
        scrollToAutomation={scrollToAutomation}
        scrollToAnalyticsNew={scrollToAnalyticsNew}
      />
      <HeroNew />
      <div ref={automationRef}>
        <Automation />
      </div>
      <div ref={analyticsRef}>
        <AnalyticsNew />
      </div>
      <div ref={agentRef}>
        <Agent />
      </div>
    
      
      {/* <Demos /> */}
      <UseCase/>
      <FooterNew />
    </div>
  );
};

export default App;
