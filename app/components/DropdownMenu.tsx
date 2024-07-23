type Props = {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
};

const DropdownMenu = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setSelectedOption(event.target.value);
  };

  return (
    <div className="flex pt-12 justify-center">
      <label className="text-sm">
        人口構成選択
        <select
          className="pl-2.5"
          value={props.selectedOption}
          onChange={handleChange}
        >
          <option value="総人口" /*general*/>総人口</option>
          <option value="年少人口" /*youth*/>年少人口</option>
          <option value="生産年齢人口" /*working-age*/>生産年齢人口</option>
          <option value="老年人口" /*elderly*/>老年人口</option>
        </select>
      </label>
    </div>
  );
};

export default DropdownMenu;
