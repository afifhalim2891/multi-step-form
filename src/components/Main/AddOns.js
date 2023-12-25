import Content from "../Reusables/Content";

const addOns = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profile",
    price: 3,
  },
];

const AddOns = ({ onSetAddOns, addOnsArr }) => {
  return (
    <Content>
      <h3>Pick add-ons</h3>
      <p className="text-gray-400 mb-8">
        Add-on help enhance your gaming experience
      </p>
      <div className="flex flex-col space-y-4">
        {addOns.map((addOn) => (
          <AddOnButton
            key={addOn.type}
            addOn={addOn}
            onSetAddOns={onSetAddOns}
            addOnsArr={addOnsArr}
          />
        ))}
      </div>
    </Content>
  );
};

export default AddOns;

const AddOnButton = ({ addOn, onSetAddOns, addOnsArr }) => {
  const handleChecked = () => {
    onSetAddOns(addOn);
  };

  return (
    <div
      className={`flex items-center border border-gray-400 rounded-md p-3 ${
        addOnsArr.includes(addOn) && "bg-veryLightBlue border-marineBlueLight"
      }`}
    >
      <input
        type="checkbox"
        className=" m-4 mr-6 h-5 w-5"
        checked={addOnsArr.includes(addOn)}
        onChange={handleChecked}
      />
      <div className="text-left flex-1">
        <h4 className="font-semibold">{addOn.type}</h4>
        <p className="text-gray-400 text-sm">{addOn.description}</p>
      </div>
      <span>+${addOn.price}/mo</span>
    </div>
  );
};
