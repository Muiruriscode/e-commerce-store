const Options = ({ values }) => {
  return (
    <>
      <option className="inline-block" value={values}>
        {values}
      </option>
    </>
  );
};

export default Options;
