import FilterTaskButton from "./FilterTaskButton";

const FilterTasks = () => {
  const buttons = ["All", "Active", "Completed"];

  return (
    <div className="filter-tasks flex justify-around mt-2">
      {buttons.map((button, index) => (
        <FilterTaskButton key={index} title={button}></FilterTaskButton>
      ))}
    </div>
  );
};

export default FilterTasks;
