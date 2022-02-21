import { FC, useEffect, useState } from "react";
import { IOptions } from "../../Models";

import "./index.css";

interface ISelectItem {
  options: Array<IOptions>;
  className: string;
  label: string;
  handleClick: (value: any, icon: any) => void;
  //   isUpdate: (t: any) => void;
}

const Select: FC<ISelectItem> = ({
  options,
  className,
  label,
  handleClick,
}: //   isUpdate,
ISelectItem) => {
  const [isAvtive, setIsActive] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selected, setSelected] = useState<string>(label);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    handleClick(selected, icon);
  }, [selected, icon]);

  useEffect(() => {
    setSelected(label);
  }, [update]);

  return (
    <div className={className}>
      <div
        className="selectHeader"
        onClick={() => {
          setIsActive(!isAvtive);
        }}
      >
        <span>
          <i className={icon}></i> {selected}
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
