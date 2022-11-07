import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const FilterTaskButton = ({ title }) => {
  const { stateFilter, setStateFilter } = useContext(AppContext);

  const changeStateFilter = (e, state) => {
    setStateFilter(state);
  };

  const styles =
    (stateFilter === title.toLowerCase()
      ? "bg-red-800 text-white"
      : "bg-white text-black") +
    " font-semibold py-1 px-4 border border-gray-400 rounded shadow";

  return (
    <button
      className={styles}
      onClick={(e) => changeStateFilter(e, title.toLowerCase())}
    >
      {title}
    </button>
  );
};

export default FilterTaskButton;
