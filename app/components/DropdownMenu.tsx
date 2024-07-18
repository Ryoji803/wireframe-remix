const DropdownMenu = () => {
  return (
    <div className="flex pt-12 justify-center">
      <label className="text-sm">
        人口構成選択
        <select className="pl-2.5">
          <option value="general">総人口</option>
          <option value="youth">年少人口</option>
          <option value="working-age">生産年齢人口</option>
          <option value="elderly">老年人口</option>
        </select>
      </label>
    </div>
  );
};

export default DropdownMenu;
