import { months } from "../../Models/months";
import "./index.css";

const Monthsbar = () => {
  return (
    <ul className="months-container">
      {months.map((month, i) => {
        return (
          <li className="month-item" key={i}>
            {month?.value}
          </li>
        );
      })}
    </ul>
  );
};

export default Monthsbar;
