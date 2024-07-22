import { useEffect, useState } from "react";
import Chart from "./Chart";
import Checkboxes from "./Checkboxes";
import DropdownMenu from "./DropdownMenu";
import { Prefecture } from "~/types";
import axios from "axios";
import { validatePrefectures } from "~/api/resas";

const App = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get<unknown>("/api/prefecture");
      const data = validatePrefectures(res.data);
      setPrefectures(data);
    })();
  }, []);

  console.log(prefectures);

  return (
    <div>
      <div className="max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-bold">人口データ分析</h1>
        <h2 className="font-medium">都道府県</h2>
        <Checkboxes prefectures={prefectures} />
        <DropdownMenu />
      </div>
      <div className="max-w-3xl mx-auto">
        <Chart />
      </div>
    </div>
  );
};

export default App;
