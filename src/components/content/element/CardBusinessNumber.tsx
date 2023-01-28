import { useEffect, useMemo, useState } from "react";

interface CardBusinessNumberContentsProps {
    data: string;
    isDisabled?: boolean;
    checkboxId: string;
}

interface CardBusinessNumberProps {
    title: string;
    contents: CardBusinessNumberContentsProps[];
    subContent: string;
    setIsOnNotificationButton: Function;
    isAllOnBusinessNumberButton: boolean;
}
function CardBusinessNumber({
    title,
    contents,
    subContent,
    setIsOnNotificationButton,
    isAllOnBusinessNumberButton,
}: CardBusinessNumberProps) {
    const [checkboxIds, setCheckboxIds] = useState<string[]>([]);
    const allCheckboxIds = useMemo(() => {
        return [...new Array(contents.length)].map((_, i) => "inp-check-0" + (i + 1));
    }, [contents.length]);

    const handleCheckbox = (isChecked: boolean, checkboxId: string) => {
        if (isChecked) {
            handleChecked(checkboxId);
            return;
        }
        handleUnchecked(checkboxId);
    };
    const handleChecked = (checkboxId: string) => {
        setCheckboxIds((prev) => [...prev, checkboxId]);
        if (checkboxIds.length + 1 === allCheckboxIds.length) {
            setIsOnNotificationButton(true);
        }
    };
    const handleUnchecked = (checkboxId: string) => {
        setCheckboxIds(checkboxIds.filter((element) => element !== checkboxId));
        if (checkboxIds.length === allCheckboxIds.length) {
            setIsOnNotificationButton(false);
        }
    };

    useEffect(() => {
        if (isAllOnBusinessNumberButton) {
            setCheckboxIds(allCheckboxIds);
            return;
        }
        setCheckboxIds([]);
    }, [isAllOnBusinessNumberButton, allCheckboxIds]);

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
                                        id={content.checkboxId}
                                        disabled={content.isDisabled}
                                        onChange={(e) => handleCheckbox(e.target.checked, e.target.id)}
                                        checked={checkboxIds.includes(content.checkboxId)}
                                    />
                                    <label htmlFor={content.checkboxId}>{content.data}</label>
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
