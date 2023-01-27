interface CardTitleProps {
  data: string;
}

function CardTitle({ data }: CardTitleProps) {
  return (
    <div className="box-header">
      <div className="box-tit">
        <h2 className="fz-20 fc-1 fw-bold">{data}</h2>
      </div>
    </div>
  );
}

export default CardTitle;
