import { Prefecture } from "~/types";
import Checkbox from "./Checkbox";

type Props = {
  prefectures: Array<Prefecture>;
};

const Checkboxes = (props: Props) => {
  return (
    <div className="grid col-span-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2.5">
      {props.prefectures.map((prefecture) => (
        <div key={prefecture.code.toString()}>
          <Checkbox prefecture={prefecture} />
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
