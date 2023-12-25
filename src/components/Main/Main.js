import React, { useState } from "react";

import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

import Button from "../Reusables/Button";

const Main = ({ step, setStep, updatePersonalInfoHandler, personalInfo }) => {
  const [name, setName] = useState({
    value: "",
    isValid: null,
  });

  const [email, setEmail] = useState({
    value: "",
    isValid: null,
  });

  const [phoneNum, setPhoneNum] = useState({
    value: "",
    isValid: null,
  });
  const [allFieldIsEmpty, setAllFieldIsEmpty] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billDuration, setBillingDuration] = useState("monthly");
  const [addOns, setAddOns] = useState([]);

  const onSetName = (nameValue) => {
    if (nameValue.trim().length > 0) {
      setName({
        value: nameValue,
        isValid: true,
      });
    } else {
      setName({
        value: nameValue,
        isValid: false,
      });
    }
  };

  const onSetEmail = (emailValue) => {
    if (
      emailValue.length > 0 &&
      emailValue.includes("@") &&
      !emailValue.includes(" ")
    ) {
      setEmail({
        value: emailValue,
        isValid: true,
      });
    } else {
      setEmail({
        value: emailValue,
        isValid: false,
      });
    }
  };

  const onSetPhoneNum = (phoneValue) => {
    if (!isNaN(phoneValue) && phoneValue.trim().length > 0) {
      setPhoneNum({
        value: phoneValue,
        isValid: true,
      });
    } else {
      setPhoneNum({
        value: phoneValue,
        isValid: false,
      });
    }
  };

  const onSetSelectedPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const onSetBillingDuration = (duration) => {
    setBillingDuration(duration);
  };

  const onSetAddOns = (addOn) => {
    const index = addOns.indexOf(addOn);

    if (index !== -1) {
      setAddOns((addOns) => [
        ...addOns.slice(0, index),
        ...addOns.slice(index + 1),
      ]);
    } else {
      setAddOns((addOns) => [...addOns, addOn]);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (step > 0) setStep((prevStep) => prevStep - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step <= 3) {
      if (
        step === 1 &&
        name.isValid !== null &&
        email.isValid !== null &&
        phoneNum.isValid !== null
      ) {
        if (name.isValid && email.isValid && phoneNum.isValid) {
          setStep((prevStep) => prevStep + 1);
          setAllFieldIsEmpty(false);
        }
      } else {
        setAllFieldIsEmpty(true);
      }

      if (step === 2 && selectedPlan !== null) {
        setStep((prevStep) => prevStep + 1);
      }

      if (step === 3) {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="col-start-2 col-end-5 ">
      <form className=" h-full">
        {step === 1 && (
          <PersonalInfo
            onSetName={onSetName}
            name={name}
            onSetEmail={onSetEmail}
            email={email}
            onSetPhoneNum={onSetPhoneNum}
            phoneNum={phoneNum}
            allFieldIsEmpty={allFieldIsEmpty}
          />
        )}
        {step === 2 && (
          <Plan
            onSetSelectedPlan={onSetSelectedPlan}
            selectedPlan={selectedPlan}
            onSetBillingDuration={onSetBillingDuration}
            billDuration={billDuration}
          />
        )}
        {step === 3 && <AddOns onSetAddOns={onSetAddOns} addOnsArr={addOns} />}
        {step === 4 && (
          <Summary
            selectedPlan={selectedPlan}
            billDuration={billDuration}
            addOns={addOns}
          />
        )}
        <div
          className={`flex flex-row max-w-lg mx-auto ${
            step > 1 ? "justify-between" : "justify-end"
          } `}
        >
          {step > 1 && <Button onClick={handlePrevious}>Go back</Button>}
          {step === 4 ? (
            <Button onClick={handleSubmit}>Confirm</Button>
          ) : (
            <Button onClick={handleNext}>Next Step</Button>
          )}
        </div>
      </form>
    </main>
  );
};

export default Main;
