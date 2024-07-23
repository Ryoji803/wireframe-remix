import { useState } from "react";
import { Prefecture } from "~/types";

type Props = {
  prefecture: Prefecture;
  addPopulation: (prefecture: Prefecture) => void;
  removePopulation: (prefecture: Prefecture) => void;
};

const Checkbox = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const nextChecked = !isChecked;

    if (nextChecked) {
      props.addPopulation(props.prefecture);
    } else {
      props.removePopulation(props.prefecture);
    }

    setIsChecked(nextChecked);
  };

  return (
    <label className="">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {props.prefecture.name}
    </label>
  );
};

export default Checkbox;
