import { useEffect, useState } from "react";
import Chart from "./Chart";
import Checkboxes from "./Checkboxes";
import DropdownMenu from "./DropdownMenu";
import { Population, Prefecture } from "~/types";
import axios from "axios";
import { validatePopulation, validatePrefectures } from "~/api/resas";

const App = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [populations, setPopulations] = useState<Population>({});

  useEffect(() => {
    (async () => {
      const res = await axios.get<unknown>("/api/prefecture");
      const data = validatePrefectures(res.data);
      setPrefectures(data);
    })();
  }, []);

  const addPopulation = async (prefecture: Prefecture) => {
    const res = await axios.get<unknown>(`/api/population/${prefecture.code}`);
    const data = validatePopulation(res.data);
    const newPopulations = {
      ...populations,
      [prefecture.name]: data,
    };
    setPopulations(newPopulations);
  };

  const removePopulation = (prefecture: Prefecture) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [prefecture.name]: _, ...newPopulations } = populations;
    setPopulations(newPopulations);
  };

  console.log(populations);

  return (
    <div>
      <div className="max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-bold">人口データ分析</h1>
        <h2 className="font-medium">都道府県</h2>
        <Checkboxes
          prefectures={prefectures}
          addPopulation={addPopulation}
          removePopulation={removePopulation}
        />
        <DropdownMenu />
      </div>
      <div className="max-w-3xl mx-auto">
        <Chart populations={populations} />
      </div>
    </div>
  );
};

export default App;
