import React from "react";
import Content from "../Reusables/Content";

const Summary = ({ selectedPlan, billDuration, addOns }) => {
  const addOnsPrice = addOns.reduce((acc, addOn) => addOn.price + acc, 0);

  let total = 0;

  if (selectedPlan) {
    if (billDuration === "monthly") {
      total = selectedPlan.price / 12 + addOnsPrice;
    } else {
      total = selectedPlan.price + addOnsPrice * 12;
    }
  }

  return (
    <Content>
      <h3>Finishing up</h3>
      <p className="text-gray-400 mb-8">
        Double-check everything looks OK before confirming
      </p>
      <div className="bg-slate-100 p-6 rounded-md divide-y divide-gray-300">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col items-start justify-center">
            <h5 className="font-semibold mb-1">
              {selectedPlan?.name} ({billDuration})
            </h5>
            <span className="text-gray-400 border-b-2 border-gray-300 text-sm">
              Change
            </span>
          </div>
          <span className="font-semibold">
            $
            {billDuration === "monthly"
              ? selectedPlan?.price / 12
              : selectedPlan?.price}
            /{billDuration}
          </span>
        </div>
        <div className="pt-4 flex flex-col space-y-2">
          {addOns.map((addon) => {
            return (
              <div className="flex justify-between" key={addon.type}>
                <span className="text-gray-400 text-sm">{addon.type}</span>
                <span className="text-sm">
                  +${billDuration === "yearly" ? addon.price * 12 : addon.price}
                  /{billDuration}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 px-2 flex justify-between items-center">
        <p className="text-gray-400">Total (per month)</p>
        <span className="font-bold">
          +${total}/{billDuration}
        </span>
      </div>
    </Content>
  );
};

export default Summary;
