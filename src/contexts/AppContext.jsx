import { createContext, useState, useRef } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);
  const [valueTextArea, setValueTextArea] = useState("");
  const [stateFilter, setStateFilter] = useState("all");

  const inputTextArea = useRef(null);

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        updateTask,
        setUpdateTask,
        inputTextArea,
        valueTextArea,
        setValueTextArea,
        stateFilter,
        setStateFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
