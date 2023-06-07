import Options from "./Options";

const Select = ({ name, optionData }) => {
  return (
    <select
      name={name}
      id={name}
      className={`border-none px-2 ${name === "location" && "bg-primary"}`}
    >
      {optionData.map((category, index) => {
        return <Options values={category.name} key={index} />;
      })}
    </select>
  );
};

export default Select;
