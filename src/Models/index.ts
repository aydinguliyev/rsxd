export interface ITextItem {}

export interface IExpencesList {
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
  handleClick: () => void;
}

export interface IOptions {
  value: string;
  label: string;
  icon: string;
}
