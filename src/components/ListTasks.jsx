import Task from "./Task";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const ListTasks = () => {
  const { tasks, stateFilter } = useContext(AppContext);

  const getTasks = () => {
    return tasks.filter(
      (task) =>
        stateFilter === "all" ||
        (stateFilter === "active" && !task.ready) ||
        (stateFilter === "completed" && task.ready)
    );
  };

  return (
    <div className="list-tasks flex flex-col mh-400-px overflow-y-auto p-2">
      <div className="counter-tasks-remaining mt-2 mb-5 font-semibold text-lg">
        {stateFilter === "all"
          ? tasks.filter((task) => !task.ready).length
          : getTasks().length}{" "}
        tasks {stateFilter === "all" ? " remaining" : " " + stateFilter}
      </div>
      {getTasks().map((task) => (
        <Task
          key={task.key}
          id={task.key}
          title={task.title}
          ready={task.ready}
        />
      ))}
    </div>
  );
};

export default ListTasks;
