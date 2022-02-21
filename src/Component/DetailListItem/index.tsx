interface IExpencesList {
  account: string;
  place: string;
  amount: string;
  category: string;
  date: string;
  categoryIcon: string;
  accountIcon: string;
}

const DetailListItem = ({
  account,
  place,
  amount,
  category,
  date,
  categoryIcon,
  accountIcon,
}: IExpencesList) => {
  return (
    <li>
      <span>{date}</span>-
      <span>
        <i className={categoryIcon}></i>
        {category}
      </span>
      -<span>{place}</span>-<span>{amount}</span>-
      <span>
        {" "}
        <i className={accountIcon}></i>
        {account}
      </span>
    </li>
  );
};

export default DetailListItem;
