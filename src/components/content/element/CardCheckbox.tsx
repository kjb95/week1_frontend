interface CardCheckboxProps {
    data: string;
    checkboxId: string;
    isOnNotificationButton: boolean;
    setIsAllOnBusinessNumberButton: Function;
}
function CardCheckbox({ data, checkboxId, isOnNotificationButton, setIsAllOnBusinessNumberButton }: CardCheckboxProps) {
    const handleAllCheckbox = (isChecked: boolean) => {
        if (isChecked) {
            setIsAllOnBusinessNumberButton(true);
            return;
        }
        setIsAllOnBusinessNumberButton(false);
    };

    return (
        <div className="box-header">
            <div className="box-tit">
                <h2 className="fz-18 fc-1">{data}</h2>
            </div>
            <div className="box-option">
                <div className="comp-switch">
                    <input
                        type="checkbox"
                        id={checkboxId}
                        onChange={(e) => handleAllCheckbox(e.target.checked)}
                        checked={isOnNotificationButton}
                    />
                    <label htmlFor="switch-01">
                        <i className="ico"></i>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CardCheckbox;
