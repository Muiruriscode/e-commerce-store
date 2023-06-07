const Button = ({ name, primary }) => {
  return (
    <button
      className={`rounded-full px-8 py-1 border border-primary ${
        primary && "bg-primary text-white"
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
