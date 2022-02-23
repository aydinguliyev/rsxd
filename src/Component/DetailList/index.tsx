import { FC } from "react";
import { IExpencesList } from "../../Models";
import DetailListItem from "./DetailListItem";

import "./index.css";

interface IExpence {
  data: Array<IExpencesList>;
}

const DetailList: FC<IExpence> = ({ data }) => {
  return (
    <ul className="data-container">
      {data?.map(
        (
          { date, account, place, amount, category, accountIcon, categoryIcon },
          index
        ) => {
          return (
            <DetailListItem
              key={index}
              date={date}
              account={account}
              place={place}
              amount={amount}
              category={category}
              categoryIcon={categoryIcon}
              accountIcon={accountIcon}
            />
          );
        }
      )}
    </ul>
  );
};

export default DetailList;
