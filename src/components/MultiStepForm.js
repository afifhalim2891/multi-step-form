import React, { useState } from "react";
import Main from "./Main/Main";
import SideBar from "./SideBar/SideBar";
import Container from "./Reusables/Container";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <SideBar step={step} />
      <Main step={step} setStep={setStep} />
    </Container>
  );
};
export default MultiStepForm;
