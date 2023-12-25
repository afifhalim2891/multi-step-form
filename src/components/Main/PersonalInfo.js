import Content from "../Reusables/Content";

const PersonalInfo = ({
  onSetName,
  name,
  onSetEmail,
  email,
  onSetPhoneNum,
  phoneNum,
  allFieldIsEmpty,
}) => {
  return (
    <Content>
      <h3 className="text-3xl font-semibold mb-2 text-marineBlue">
        Personal info
      </h3>
      <p className="text-gray-400 mb-10">
        Please provide your name, email address and phone number
      </p>

      <div className="text-marineBlue">
        <div className="flex flex-col mb-6">
          <div className="flex justify-between">
            <label htmlFor="name">Name</label>
            {name.isValid === false && (
              <span className="text-red-500">Invalid name!</span>
            )}
          </div>
          <input
            className={`focus:outline-none border border-gray-300 rounded-lg py-2 px-4 ${
              name.isValid === false && "border-red-500"
            }`}
            name="name"
            id="name"
            type="text"
            onChange={(e) => onSetName(e.target.value)}
            value={name.value}
          />
        </div>

        <div className="flex flex-col mb-6">
          <div className="flex justify-between">
            <label htmlFor="email">Email address</label>
            {email.isValid === false && (
              <span className="text-red-500">Invalid email address!</span>
            )}
          </div>
          <input
            className={`focus:outline-none border border-gray-300 rounded-lg py-2 px-4 ${
              email.isValid === false && "border-red-500"
            }`}
            name="email"
            id="email"
            type="email"
            onChange={(e) => onSetEmail(e.target.value)}
            value={email.value}
          />
        </div>

        <div className="flex flex-col mb-6">
          <div className="flex justify-between">
            <label htmlFor="phone">Phone Number</label>
            {phoneNum.isValid === false && (
              <span className="text-red-500">Invalid phone number!</span>
            )}
          </div>
          <input
            className={`focus:outline-none border border-gray-300 rounded-lg py-2 px-4 ${
              phoneNum.isValid === false && "border-red-500"
            }`}
            name="phone"
            id="phone"
            type="text"
            onChange={(e) => onSetPhoneNum(e.target.value)}
            value={phoneNum.value}
          />
        </div>
      </div>

      <div>
        {allFieldIsEmpty && (
          <p className="text-red-500">Please filled all required fields!</p>
        )}
      </div>
    </Content>
  );
};

export default PersonalInfo;
