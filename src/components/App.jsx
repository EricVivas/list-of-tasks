import CreateEditTask from "./CreateEditTask";
import FilterTasks from "./FilterTasks";
import ListTasks from "./ListTasks";

const App = () => {
  return (
    <div className="app rounded-lg bg-gray-200 p-5 w-350-px mh-800-px margin-0-auto">
      <CreateEditTask />
      <div className="w-90-percent margin-0-auto">
        <FilterTasks />
        <ListTasks />
      </div>
    </div>
  );
};

export default App;
