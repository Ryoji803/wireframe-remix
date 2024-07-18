import Checkbox from "./Checkbox";

const Checkboxes = () => {
  return (
    <div className="grid col-span-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2.5">
      {["a", "b", "c", "d", "e"].map((prefecture) => (
        <div key={prefecture}>
          <Checkbox prefecture={prefecture} />
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
