import SimpleCardSubContents from "../element/SimpleCardSubContents";
interface SimpleCardProps {
  title: string;
  titleDescription?: boolean;
  content: string;
  subContents?: string[];
}

function SimpleCard({
  title,
  titleDescription,
  content,
  subContents,
}: SimpleCardProps) {
  return (
    <div className="col col-4">
      <div className="wrap-section wrap-tbl wrap-dashboard">
        <div className="box-body">
          <div className="tbl">
            <dl className="vertical">
              <dt>
                <div className="dt-inner">
                  <span className="fz-14 fc-4">
                    {title}
                    {titleDescription && (
                      <a className="ico-tooltip tooltip-f" title=""></a>
                    )}
                  </span>
                </div>
              </dt>
              <dd>
                <div
                  className={
                    "form-group " + (subContents ? "flex-container" : "")
                  }
                >
                  <span className="comp-txt">
                    <span className="table">
                      <span className="table-cell">
                        <b className="fz-20 fc-2 fw-medium">{content}</b>
                      </span>
                    </span>
                  </span>
                  {subContents && (
                    <SimpleCardSubContents subContents={subContents} />
                  )}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
