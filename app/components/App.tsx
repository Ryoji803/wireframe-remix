import Checkboxes from "./Checkboxes";

const App = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold">人口データ分析</h1>
      <h2 className="font-medium">都道府県</h2>
      <Checkboxes />
    </div>
  );
};

export default App;
