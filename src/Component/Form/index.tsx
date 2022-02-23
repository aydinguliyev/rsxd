import { FC, useState } from "react";
import {
  Category,
  IAccounts,
  IExpencesList,
  IOptions,
} from "../../Models/index";
import { expenceTime } from "../../Utils";
import DetailList from "../DetailList";
import Filter from "../Filter";
import Monthsbar from "../Monthsbar";
import Select from "../Select";
import Total from "../Total";
import "./index.css";

interface IProps {
  options: Array<IOptions>;
  accounts: Array<IAccounts>;
}

const Form: FC<IProps> = ({ options, accounts }) => {
  const [expences, setExpences] = useState<Array<IExpencesList>>([
    {
      id: Math.random().toString(36).substring(2, 9),
      date: "22.02.22",
      place: "trf",
      amount: "12",
      category: Category.MAR,
      account: "debet",
      categoryIcon: "fas fa-dot",
      accountIcon: "fas fa-dot",
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      date: "22.02.22",
      place: "trf",
      amount: "102",
      category: Category.TRN,
      account: "debet",
      categoryIcon: "fas fa-dot",
      accountIcon: "fas fa-dot",
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      date: "22.02.22",
      place: "trf",
      amount: "18",
      category: Category.CLS,
      account: "debet",
      categoryIcon: "fas fa-dot",
      accountIcon: "fas fa-dot",
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      date: "22.02.22",
      place: "trf",
      amount: "73",
      category: Category.MAR,
      account: "debet",
      categoryIcon: "fas fa-dot",
      accountIcon: "fas fa-dot",
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      date: "22.02.22",
      place: "trf",
      amount: "15",
      category: Category.HLT,
      account: "debet",
      categoryIcon: "fas fa-dot",
      accountIcon: "fas fa-dot",
    },
  ]);
  const [date, setDate] = useState<string>(expenceTime);
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("");
  const [amount, setAmount] = useState<any>();
  const [account, setAccount] = useState("");
  const [total, setTotal] = useState<number>(0);
  const [iconCategory, setIconCategory] = useState("");
  const [iconAccount, setIconAccount] = useState("");
  const [reset, setReset] = useState<boolean>(false);

  const handlePlace = (e: any) => {
    setPlace(e.target.value);
  };
  const handleDate = (e: any) => {
    setDate(e.target.value);
  };
  const handleAmount = (e: any) => {
    const reg = new RegExp("\\d{1,9}(\\.\\d{1,9})?");
    if (reg.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  const handleCategorySelect = (value: any, icon: any) => {
    setReset(false);
    setCategory(value);
    setIconCategory(icon);
  };

  const handleAccountSelect = (value: any, icon: any) => {
    setReset(false);
    setAccount(value);
    setIconAccount(icon);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      place != "" &&
      amount != undefined &&
      category != "category" &&
      account != "account"
    ) {
      const expence = {
        id: Math.random().toString(36).substring(2, 9),
        date: date,
        place: place,
        amount: amount,
        category: category,
        account: account,
        categoryIcon: iconCategory,
        accountIcon: iconAccount,
      };
      setExpences([...expences, expence]);
      setTotal(Number(total) + Number(amount));
      updateForm();
    } else {
      return;
    }
  };

  const updateForm = () => {
    setPlace("");
    setAmount("");
    setReset(true);
  };

  return (
    <>
      <div className="nav-header">
        <Monthsbar />
        <Total totalAmount={total} />
      </div>
      <Filter data={expences} />
      <form className="form-container">
        <input
          className="dateInput"
          type="text"
          value={date}
          placeholder="date"
          onChange={handleDate}
        />

        <Select
          update={reset}
          className={"category"}
          label={"category"}
          options={options}
          handleClick={(value: any, icon: any) => {
            handleCategorySelect(value, icon);
          }}
        />

        <input
          type="text"
          placeholder="description"
          className="descriptionInput"
          onChange={handlePlace}
          value={place}
        />
        <input
          className="inputAmount"
          type="text"
          value={amount}
          placeholder="amount"
          onChange={handleAmount}
        />

        <Select
          update={reset}
          className={"account"}
          label={"account"}
          options={accounts}
          handleClick={(value: any, icon: any) =>
            handleAccountSelect(value, icon)
          }
        />

        <button className="btn-form" onClick={handleSubmit}>
          add
        </button>
      </form>
      <DetailList data={expences} />
    </>
  );
};

export default Form;
