import React, { useState, ChangeEvent } from "react";
import style from "./register-forms.module.css";

interface Props {
  setUserSelectOption: React.Dispatch<React.SetStateAction<string>>;
}

interface Option {
  value: string;
  label: string;
}

const RegisterSelect: React.FC<Props> = ({ setUserSelectOption }) => {
  const joinStatusOptions: Option[] = [
    { value: "", label: "Select" },
    { value: "writer", label: "Writer" },
    { value: "reader", label: "Reader" },
  ];

  const [joinStatus, setJoinStatus] = useState<string>("");

  const handleSelectedProp = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setJoinStatus(selectedValue);
    setUserSelectOption(selectedValue);
  };

  return (
    <div className={style.register_select_wrapper}>
      {/* Label for select input */}
      <label htmlFor="join_status" className={style.register_select_label}>
        You are joining as?
      </label>
      {/* Select input */}
      <div className={style.register_select_component}>
        <select
          data-testid="user_type"
          id="join_status"
          onChange={handleSelectedProp}
          className={style.register_select_card}
          value={joinStatus}
          aria-label="Join status"
          aria-required="true"
        >
          {joinStatusOptions.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RegisterSelect;
