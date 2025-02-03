interface Props {
  children: string;
  //   color?: string;
  color?: "primary" | "secondary" | "danger"; //we can limit our options for btn-color
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
