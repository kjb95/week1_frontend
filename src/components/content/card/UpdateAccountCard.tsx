import CardButton from "../element/CardButton";
import CardRefund from "../element/CardRefund";
import CardRefundCaution from "../element/CardRefundCaution";
import CardTitle from "../element/CardTitle";

function UpdateAccountCard() {
  return (
    <div className="col col-6">
      <div className="wrap-section wrap-tbl">
        <CardTitle data="환불계좌" />
        <CardButton
          data="하나은행"
          subData="123-45-6789-01"
          buttonDescription="변경"
        />
        <CardRefundCaution />
        <CardRefund />
      </div>
    </div>
  );
}

export default UpdateAccountCard;
