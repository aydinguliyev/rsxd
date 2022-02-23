import { FC } from "react";
import Form from "../Form";
import { options } from "../../Models/options";
import { accounts } from "../../Models/accounts";

import "./index.css";

const Expences: FC = () => {
  return (
    <div className="expences-container">
      <Form options={options} accounts={accounts} />
    </div>
  );
};

export default Expences;
