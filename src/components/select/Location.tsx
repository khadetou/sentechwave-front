import React, { useState, FC } from "react";
import Select, { StylesConfig } from "react-select";
import { IoLocationOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { useAppSelector } from "hooks/index";

interface LocationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
const Location: FC<LocationProps> = ({ setIsOpen, isOpen }) => {
  // OPTIONS
  // const options = [
  //   { value: "Localisation", label: "Localisation" },
  //   { value: "Alabama", label: "Alabama" },
  //   { value: "Alaska", label: "Alaska" },
  //   { value: "Arizona", label: "Arizona" },
  //   { value: "Delaware", label: "Delaware" },
  //   { value: "Georgia", label: "Georgia" },
  //   { value: "Hawaii", label: "Hawaii" },
  //   { value: "Indiana", label: "Indiana" },
  //   { value: "Nevada", label: "Nevada" },
  //   { value: "New Jersey", label: "New Jersey" },
  //   { value: "New Mexico", label: "New Mexico" },
  //   { value: "New York", label: "New York" },
  // ];

  const { products } = useAppSelector((store) => store.product);

  const categories = products.map((product: any) => product.category);
  const filteredcat = [...new Set(categories)];
  const options = filteredcat.map((category: any) => {
    return {
      value: category,
      label: category,
    };
  });

  //   REACT SELECT STYLING
  const selectStyles: StylesConfig<any, false> = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      marginBottom: 15,
      boxShadow: "none !important",
      border: "1px solid #BCE3C9 !important",
      borderRadius: "5px",
    }),
    input: (base) => ({
      width: "100%",
      height: "40px",
      border: "none",
      input: {
        height: "100%",
        paddingLeft: "20px !important",
      },
    }),
    container: (base) => ({
      ...base,
      padding: "15px",
      borderRadius: "5px",
      minWidth: "220px",
      height: "286px",
      backgroundColor: "#fff",
      borderTop: "none",
      borderBottom: "1px solid #ececec",
      borderLeft: "1px solid #ececec",
      borderRight: "1px solid #ececec",
    }),
    valueContainer: (base) => ({
      width: "100%",
      height: "100%",
    }),
    menu: (base) => ({
      ...base,
      width: "100%",
      margin: 0,
      position: "static",
      border: "none",
      boxShadow: "none",
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px",
      "&::-webkit-scrollbar": {
        width: " 0.375rem",
        height: "0.375rem",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "100vh",
        backgroundColor: "#f4f4f4",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#d1d1d1",
        borderRadius: "100vh",
        border: "3px solid #d1d1d1",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#ececec" : "transparent",
      color: state.isSelected ? "#7e7e7e" : "#7e7e7e",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ececec" : "#9ddbc9",
      },
    }),
    placeholder: (base) => ({
      display: "none",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),
  };

  const [value, setValue] = useState<any>(undefined);

  const onSelectChange = (value: any) => {
    setIsOpen(!isOpen);
    setValue(value);
  };

  //   ONFORM SUBMIT
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="search-location" onClick={() => setIsOpen(!isOpen)}>
      <form onSubmit={onSubmit} className="btn-group tw-group">
        <div className="tw-relative tw-w-[188px] tw-z-50">
          <button className="btn btn-light d-flex align-items-center tw-relative group">
            <IoLocationOutline
              color="#B6B6B6"
              className="tw-mr-[7px] tw-text-base"
            />
            <span className="tw-relative tw-leading-10 tw-font-medium tw-font-Quicksand tw-p-0 tw-text-sm">
              {value ? value.value : "Your Location"}
            </span>
            <FiChevronDown
              color="#B6B6B6"
              className="tw-text-sm tw-ml-1 group-hover:tw-ml-2 tw-absolute tw-right-3 group-hover:tw-right-2"
            />
          </button>
          <div
            className={`tw-absolute tw-z-50 ${
              isOpen ? "tw-block" : "tw-hidden"
            }`}
          >
            <Select
              options={options}
              instanceId="lacalisation"
              autoFocus
              backspaceRemovesValue={false}
              controlShouldRenderValue={false}
              hideSelectedOptions={false}
              isClearable={false}
              menuIsOpen
              onChange={onSelectChange}
              placeholder="Search..."
              styles={selectStyles}
              tabSelectsValue={false}
              value={value}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Location;
