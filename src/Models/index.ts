export interface IExpence {
  expences: Array<IExpencesList>;
}

export interface IData {
  data: Array<IDataItems>;
}

export interface IDataItems {
  date: string;
  place: string;
  amount: string;
  category: string;
  account: string;
  categoryIcon: string;
  accountIcon: string;
}

export interface IExpencesList {
  id: string;
  date: string;
  place: string;
  amount: string;
  category: string;
  account: string;
  categoryIcon: string;
  accountIcon: string;
}

export interface ITotalAmount {
  totalAmount: number;
}

export interface ISelectItem {
  options: Array<IOptions>;
  className: string;
  label: string;
  update: boolean;
  handleClick: () => void;
}

export interface IProps {
  options: Array<IOptions>;
  accounts: Array<IAccounts>;
}

export interface IOptions {
  value: string;
  label: string;
  icon: string;
}

export interface IAccount {
  accounts: Array<IAccounts>;
}
export interface IAccounts {
  value: string;
  label: string;
  icon: string;
}

export enum Category {
  MAR = "market",
  TRN = "transport",
  CLS = "clothes",
  COM = "communal",
  HLT = "health",
  RES = "rest",
  OTH = "others",
}
