import CardBusinessNumber from "../element/CardBusinessNumber";
import CardCheckbox from "../element/CardCheckbox";
import CardTitle from "../element/CardTitle";

function DisableNotificationCard() {
  return (
    <div className="col col-6">
      <div className="wrap-section wrap-tbl">
        <CardTitle data="알림설정" />
        <CardCheckbox data="알림 수신동의" />
        <CardBusinessNumber
          title="충전사업자번호"
          contents={[
            { data: "캠페인 알림 수신", isDisabled: true },
            { data: "프로모션 알림 수신", isDisabled: true },
            { data: "비즈머니 충전 알림 수신", isDisabled: true },
            { data: "야간 알림 수신 (21시 ~ 익일 8시)", isDisabled: true },
          ]}
          subContent="의무적으로 안내되어야 하는
                      정보성 내용은 수신동의 여부와 무관하게 제공합니다."
        />
      </div>
    </div>
  );
}

export default DisableNotificationCard;
