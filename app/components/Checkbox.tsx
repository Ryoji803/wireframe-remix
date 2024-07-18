import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = async () => {
    console.log("checked");
  };

  const handleDecheck = () => {
    console.log("dechecked");
  };

  const handleChange = () => {
    const nextChecked = !isChecked;

    if (nextChecked) {
      handleCheck();
    } else {
      handleDecheck();
    }

    setIsChecked(nextChecked);
  };

  return (
    <label className="flex items-center justify-center w-24">
      <input type="checkbox" checked={isChecked} onClick={handleChange} />
      Hyogo
    </label>
  );
};

export default Checkbox;
