import { useContext, useRef } from "react";
import { AppContext } from "../contexts/AppContext";

const Task = ({ id, title, ready }) => {
  const { tasks, setTasks, setUpdateTask, inputTextArea, setValueTextArea } =
    useContext(AppContext);

  const inputCheckbox = useRef(null);

  const handleChangeCheckbox = (checked) => {
    setTasks(
      tasks.map((task) =>
        task.key === id
          ? { key: task.key, title: task.title, ready: checked }
          : task
      )
    );
  };

  const handleClickTitle = () => {
    inputCheckbox.current.checked = !inputCheckbox.current.checked;
    handleChangeCheckbox(inputCheckbox.current.checked);
  };

  const handleClickEdit = () => {
    inputTextArea.current.value = title;
    setValueTextArea(title);
    setUpdateTask({
      key: id,
      title,
    });
  };

  const handleClickDelete = () => {
    setTasks(tasks.filter((task) => task.key != id));
  };

  return (
    <div className="task rounded-lg bg-neutral-600 mt-4 mb-4 p-2">
      <div className="">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => handleChangeCheckbox(e.target.checked)}
            checked={ready}
            ref={inputCheckbox}
          />
          <label
            className="ml-2 text-sm font-medium text-white dark:text-gray-500"
            onClick={handleClickTitle}
          >
            {title}
          </label>
        </div>
      </div>
      <div className="flex edit-delete-buttons">
        <button
          className="bg-white font-semibold py-2 px-4 border border-gray-400 rounded shadow text-black pr-5 mt-2"
          onClick={handleClickEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-white pr-5 mt-2"
          onClick={handleClickDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
