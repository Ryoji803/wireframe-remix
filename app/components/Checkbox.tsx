import { useState } from "react";

type Props = {
  prefecture: string;
};

const Checkbox = (props: Props) => {
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
    <label className="">
      <input type="checkbox" checked={isChecked} onClick={handleChange} />
      {props.prefecture}
    </label>
  );
};

export default Checkbox;
