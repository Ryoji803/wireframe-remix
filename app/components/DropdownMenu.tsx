type Props = {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
};

const labels = ["総人口", "年少人口", "生産年齢人口", "老年人口"];

const DropdownMenu = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setSelectedOption(event.target.value);
  };

  return (
    <div className="flex pt-12 justify-center">
      <label className="text-sm font-medium">
        <span className="pr-2.5">人口構成選択</span>
        <select value={props.selectedOption} onChange={handleChange}>
          {labels.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropdownMenu;
