import "./Button.scss";

const Button = ({ message }) => {
  return (
    <button type="button" className="btn">
      {message}
    </button>
  );
};

export default Button;
