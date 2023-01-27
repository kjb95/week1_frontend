interface CardBusinessNumberContentsProps {
  data: string;
  isChecked?: boolean;
  isDisabled?: boolean;
}

interface CardBusinessNumberProps {
  title: string;
  contents: CardBusinessNumberContentsProps[];
  subContent: string;
}
function CardBusinessNumber({
  title,
  contents,
  subContent,
}: CardBusinessNumberProps) {
  return (
    <div className="box-body">
      <div className="tbl">
        <dl className="vertical">
          <dt>
            <div className="dt-inner">
              <span className="fz-16 fc-1">{title}</span>
            </div>
          </dt>
          <dd>
            <div className="htmlForm-group">
              {contents.map((content, index) => (
                <div className="comp-checkbox block" key={index}>
                  <input
                    type="checkbox"
                    id={"inp-check-0" + index + 1}
                    checked={content.isChecked}
                    disabled={content.isDisabled}
                  />
                  <label htmlFor={"inp-check-0" + index + 1}>
                    {content.data}
                  </label>
                </div>
              ))}
            </div>
            <div className="htmlForm-group">
              <span className="comp-txt">
                <span className="table">
                  <span className="table-cell">
                    <b className="fz-12 fc-3 lh20">
                      <i className="fz-12 fc-5">*</i>
                      {subContent}
                    </b>
                  </span>
                </span>
              </span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default CardBusinessNumber;
