import { FC, useState } from "react";
import { Category, IDataItems } from "../../Models";

interface IData {
  data: Array<IDataItems>;
}

const Filter: FC<IData> = ({ data }) => {
  const [marAmount, setMarAmount] = useState<number>(0);

  const handleFilter = () => {
    data?.filter((item) => {
      if (item?.category === Category.MAR) {
        setMarAmount(Number(marAmount) + Number(item?.amount));
      }
    });
  };

  return (
    <div>
      {/* <span>MRK: {marAmount}</span> */}
      {/* <button onClick={handleFilter}>count</button> */}
    </div>
  );
};

export default Filter;
