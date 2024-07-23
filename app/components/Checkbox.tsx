import { useState } from "react";
import { validatePopulation } from "~/api/resas";
import { Prefecture } from "~/types";

type Props = {
  prefecture: Prefecture;
  addPopulation: (prefecture: Prefecture) => void;
};

const Checkbox = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = async () => {
    props.addPopulation(props.prefecture);
    //validatePopulation(props.prefecture.code);
    console.log(props.prefecture.name + " checked");
  };

  const handleDecheck = () => {
    console.log(props.prefecture.name + " dechecked");
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
      {props.prefecture.name}
    </label>
  );
};

export default Checkbox;
