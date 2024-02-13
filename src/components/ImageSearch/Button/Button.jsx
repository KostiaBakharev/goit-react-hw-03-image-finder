const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="button" className="Button">
      {children}
    </button>
  );
};
export default Button;
