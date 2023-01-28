import { useEffect, useState } from "react";
import CardBusinessNumber from "../element/CardBusinessNumber";
import CardCheckbox from "../element/CardCheckbox";
import CardTitle from "../element/CardTitle";

function EnableNotificationCard() {
    const [isOnNotificationButton, setIsOnNotificationButton] = useState<boolean>(true);
    const [isAllOnBusinessNumberButton, setIsAllOnBusinessNumberButton] = useState<boolean>(true);

    useEffect(() => {
        if (isAllOnBusinessNumberButton) {
            setIsOnNotificationButton(true);
            return;
        }
        setIsOnNotificationButton(false);
    }, [isAllOnBusinessNumberButton]);

    return (
        <div className="col col-6">
            <div className="wrap-section wrap-tbl">
                <CardTitle data="알림설정" />
                <CardCheckbox
                    data="알림 수신동의"
                    checkboxId="switch-01"
                    isOnNotificationButton={isOnNotificationButton}
                    setIsAllOnBusinessNumberButton={setIsAllOnBusinessNumberButton}
                />
                <CardBusinessNumber
                    title="충전사업자번호"
                    contents={[
                        { data: "캠페인 알림 수신", checkboxId: "inp-check-01" },
                        { data: "프로모션 알림 수신", checkboxId: "inp-check-02" },
                        { data: "비즈머니 충전 알림 수신", checkboxId: "inp-check-03" },
                        { data: "야간 알림 수신 (21시 ~ 익일 8시)", checkboxId: "inp-check-04" },
                    ]}
                    subContent="의무적으로 안내되어야 하는 정보성 내용은 수신동의 여부와 무관하게 제공합니다."
                    setIsOnNotificationButton={setIsOnNotificationButton}
                    isAllOnBusinessNumberButton={isAllOnBusinessNumberButton}
                />
            </div>
        </div>
    );
}

export default EnableNotificationCard;
