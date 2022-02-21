import { FC } from "react";

interface ITotalAmount {
  totalAmount: number;
}
const Total: FC<ITotalAmount> = ({ totalAmount }) => {
  return (
    <div>
      <div>Total: {totalAmount}</div>
    </div>
  );
};

export default Total;
