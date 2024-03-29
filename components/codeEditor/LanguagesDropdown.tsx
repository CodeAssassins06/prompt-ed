import React from "react";
import Select from "react-select";
import { languageOptions } from "@/constants/languageOptions";
import { customStyles } from "@/constants/customStyles";

const LanguagesDropdown = ({ onSelectChange }: any) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption: any) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;