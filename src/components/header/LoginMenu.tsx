interface LoginMenuProps {
  isSelected?: boolean;
  data: string;
  index: string;
}
function LoginMenu({ isSelected, data, index }: LoginMenuProps) {
  return (
    <li className={"opt-menu " + (isSelected && "selected")}>
      <p className="fc-1">
        <span className="txt-mark">{data}</span> {index}
      </p>
    </li>
  );
}

export default LoginMenu;
