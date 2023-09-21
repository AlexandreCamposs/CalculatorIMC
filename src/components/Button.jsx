const Button = ({ type, value, children }) => {
  return (
    <button className={type} onClick={value}>
      {children}
    </button>
  );
};

export default Button;
