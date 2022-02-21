import { FC, useEffect, useRef, useState } from "react";
import { accounts } from "../../Models/accounts";
import { IExpencesList } from "../../Models/index";
import { options } from "../../Models/options";
import { expenceTime } from "../../Utils";
import DetailListItem from "../DetailListItem";
import Select from "../Select";
import Total from "../Total";
import "./index.css";

const Form: FC = () => {
  const [expences, setExpences] = useState<Array<IExpencesList>>([]);
  const [date, setDate] = useState<string>(expenceTime);
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("");
  const [amount, setAmount] = useState<any>();
  const [account, setAccount] = useState("");
  const [total, setTotal] = useState<number>(0);
  const [iconCategory, setIconCategory] = useState("");
  const [iconAccount, setIconAccount] = useState("");

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
    setCategory(value || options[0].value);
    setIconCategory(icon);
  };

  const handleAccountSelect = (value: any, icon: any) => {
    setAccount(value || accounts[0].value);
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
      const t = {
        date: date,
        place: place,
        amount: amount,
        category: category,
        account: account,
        categoryIcon: iconCategory,
        accountIcon: iconAccount,
      };
      setExpences([...expences, t]);
      setTotal(Number(total) + Number(amount));
      updateForm();
    } else {
      return;
    }
  };

  const updateForm = () => {
    setPlace("");
    setAmount("");
  };

  return (
    <>
      <Total totalAmount={total} />
      <form>
        <input
          type="text"
          value={date}
          placeholder="date"
          onChange={handleDate}
        />

        <Select
          className={"category"}
          label={"category"}
          options={options}
          handleClick={(value: any, icon: any) => {
            handleCategorySelect(value, icon);
          }}
        />

        <input
          type="text"
          placeholder="place"
          onChange={handlePlace}
          value={place}
        />
        <input
          type="text"
          value={amount}
          placeholder="amount"
          onChange={handleAmount}
        />

        <Select
          className={"account"}
          label={"account"}
          options={accounts}
          handleClick={(value: any, icon: any) =>
            handleAccountSelect(value, icon)
          }
        />

        <button onClick={handleSubmit}>add</button>
      </form>
      {expences?.map(
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
    </>
  );
};

export default Form;
