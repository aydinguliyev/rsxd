import { FC, useEffect, useState } from "react";
import { IOptions } from "../../Models";

import "./index.css";

interface ISelectItem {
  options: Array<IOptions>;
  className: string;
  label: string;
  update: boolean;
  handleClick: (value: any, icon: any) => void;
}

const Select: FC<ISelectItem> = ({
  options,
  className,
  label,
  update,
  handleClick,
}: ISelectItem) => {
  const upIcon = "fas fa-caret-up";
  const downIcon = "fas fa-caret-down";

  const [isAvtive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<string>(label);
  const [icon, setIcon] = useState(downIcon);

  useEffect(() => {
    setSelected(label);
    setIcon("fas fa-caret-down");
  }, [update]);

  useEffect(() => {
    handleClick(selected, icon);
  }, [selected, icon]);

  return (
    <div className={`${className} select-container`}>
      <div
        tabIndex={0}
        className="selectHeader"
        onClick={() => {
          setIsActive(!isAvtive);
          setSelected(label);
          isAvtive ? setIcon(downIcon) : setIcon(upIcon);
        }}
      >
        <span>
          {update ? (
            <i className={icon}>
              <span>{label}</span>
            </i>
          ) : (
            <i className={icon}>
              <span>{selected}</span>
            </i>
          )}
        </span>
      </div>
      {isAvtive && (
        <div
          className="selectList"
          onClick={() => {
            setIsActive(false);
          }}
        >
          {options.map((item: IOptions) => {
            return (
              <div
                className="selectList_item"
                tabIndex={0}
                key={item.value}
                onClick={() => {
                  setSelected(item.label);
                  setIcon(item.icon);
                }}
              >
                <i className={item.icon}></i>
                <span>{item.value}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
