interface CardButtonProps {
  data: string;
  subData?: string;
  buttonDescription: string;
}

function CardButton({ data, subData, buttonDescription }: CardButtonProps) {
  return (
    <div className="box-header">
      <div className="box-tit">
        <h2 className="fz-18 fc-1">{data}</h2>
        <span className="fz-18 fc-1">{subData}</span>
      </div>
      <div className="box-option">
        <button type="button" className="btn btn btn-primary">
          {buttonDescription}
        </button>
      </div>
    </div>
  );
}

export default CardButton;
