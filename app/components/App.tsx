import Chart from "./Chart";
import Checkboxes from "./Checkboxes";
import DropdownMenu from "./DropdownMenu";

const App = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-bold">人口データ分析</h1>
        <h2 className="font-medium">都道府県</h2>
        <Checkboxes />
        <DropdownMenu />
      </div>
      <div className="max-w-3xl mx-auto">
        <Chart />
      </div>
    </div>
  );
};

export default App;
