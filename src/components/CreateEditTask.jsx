import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const CreateEditTask = () => {
  const {
    tasks,
    setTasks,
    updateTask,
    setUpdateTask,
    inputTextArea,
    valueTextArea,
    setValueTextArea,
  } = useContext(AppContext);

  const [counterKeys, setCounterKeys] = useState(0);

  const handleClickAdd = () => {
    if (!updateTask) {
      if (!valueTextArea) return;
      setTasks([
        ...tasks,
        {
          key: counterKeys,
          title: valueTextArea,
          ready: false,
        },
      ]);
      setCounterKeys(counterKeys + 1);
    } else {
      setTasks(
        tasks.map((task) =>
          task.key === updateTask.key
            ? { key: task.key, title: valueTextArea, ready: task.ready }
            : task
        )
      );
      setUpdateTask(null);
    }

    inputTextArea.current.value = "";
    setValueTextArea("");
  };

  return (
    <div className="create-edit-task flex flex-col justify-center mt-5">
      <div className="mb-2 text-center">Whats needs to be done?</div>
      <textarea
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setValueTextArea(e.target.value)}
        ref={inputTextArea}
      ></textarea>
      <button
        className="bg-black hover:bg-red-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-white pr-5 mt-2"
        onClick={handleClickAdd}
      >
        Add
      </button>
    </div>
  );
};

export default CreateEditTask;
