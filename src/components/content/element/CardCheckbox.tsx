interface CardCheckboxProps {
  data: string;
  isChecked?: boolean;
}
function CardCheckbox({ data, isChecked }: CardCheckboxProps) {
  return (
    <div className="box-header">
      <div className="box-tit">
        <h2 className="fz-18 fc-1">{data}</h2>
      </div>
      <div className="box-option">
        <div className="comp-switch">
          <input
            type="checkbox"
            id={isChecked ? "switch-01" : "switch-02"}
            checked={isChecked ? true : false}
          />
          <label htmlFor="switch-01">
            <i className="ico"></i>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CardCheckbox;
