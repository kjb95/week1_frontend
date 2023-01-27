function CardRefundCaution() {
  return (
    <div className="box-body">
      <div className="tbl">
        <dl className="vertical">
          <dd>
            <div className="htmlForm-group">
              <div className="comp-help">
                <ul className="help-list">
                  <li className="list">
                    <i className="ico ico-help"></i>
                    <span className="fz-14 fc-2">환불 주의사항</span>
                  </li>
                  <li className="list">
                    <span className="fz-14 fc-4 bullet">
                      진행중인 캠페인이 있으면 환불 신청이 불가능합니다.
                    </span>
                  </li>
                  <li className="list">
                    <span className="fz-14 fc-4 bullet">
                      캠페인 정산이 모두 완료되어야 환불 신청이 가능합니다.
                    </span>
                  </li>
                  <li className="list">
                    <span className="fz-14 fc-4 bullet">
                      환불을 신청하면 유상비즈머니 잔액이 모두 환불됩니다.
                    </span>
                  </li>
                  <li className="list">
                    <span className="fz-14 fc-4 bullet">
                      유상비즈머니를 충전한 방식 그대로 환불됩니다.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default CardRefundCaution;
