import Checkbox from "./Checkbox";

const Checkboxes = () => {
  return (
    <div className="grid grid-cols-4 gap-2.5 items-center">
      <div className="col-span-1 border text-center">都道府県</div>
      <div className="grid col-span-4 grid-cols-4 gap-2.5">
        {["a", "b", "c", "d", "e"].map((prefecture) => (
          <div className="p-2.5" key={prefecture}>
            <Checkbox prefecture={prefecture} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;
