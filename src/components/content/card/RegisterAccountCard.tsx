import CardButton from "../element/CardButton";
import CardRefund from "../element/CardRefund";
import CardRefundCaution from "../element/CardRefundCaution";
import CardTitle from "../element/CardTitle";

function RegisterAccountCard() {
  return (
    <div className="col col-6">
      <div className="wrap-section wrap-tbl">
        <CardTitle data="환불계좌" />
        <CardButton
          data="등록된 환불계좌가 없습니다."
          buttonDescription="등록"
        />
        <CardRefundCaution />
        <CardRefund />
      </div>
    </div>
  );
}

export default RegisterAccountCard;
