import "./ToggleButton.css";

const ToggleButton = ({ billDuration, handleToggle }) => {
  return (
    <button className="toggle-button" onClick={handleToggle}>
      <div
        className={`inside-toggle ${
          billDuration === "yearly" ? "toggled-right" : "toggled-left"
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
