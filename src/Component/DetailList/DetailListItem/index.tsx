import "./index.css";

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
    <li className="detailListItem">
      <span className="date-item">{date}</span>

      <span className="category-item">
        <i className={categoryIcon}></i>
        {category}
      </span>

      <span className="place-item">{place}</span>

      <span className="amount-item">{amount}</span>

      <span className="account-item">
        <i className={accountIcon}></i>
        {account}
      </span>
      <button className="btn-delete-item">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default DetailListItem;
