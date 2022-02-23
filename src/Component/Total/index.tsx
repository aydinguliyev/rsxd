import { FC } from "react";

import "./index.css";

interface ITotalAmount {
  totalAmount: number;
}
const Total: FC<ITotalAmount> = ({ totalAmount }) => {
  return (
    <div className="total-container">
      <div className="total-item"> {totalAmount} azn</div>
      <div className="total-info">TOTAL EXPENCES</div>
    </div>
  );
};

export default Total;
