import {useState} from "react";

interface InputAtomProps {
  label: string;
  value: string;
  onChange
  placeholder?: string;
}

export const ImputAtom = (props: InputAtomProps) => {
  const { label, placeholder, value, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
