interface CardCheckboxProps {
	data: string;
	checkboxId: string;
	isOnNotificationButton: boolean;
	setIsAllOnBusinessNumberButton?: Function;
	setIsOnNotificationButton: Function;
}
function CardCheckbox({ data, checkboxId, isOnNotificationButton, setIsAllOnBusinessNumberButton, setIsOnNotificationButton }: CardCheckboxProps) {
	const handleCheckbox = (isChecked: boolean) => {
		if (isChecked) {
			handleChecked();
			return;
		}
		handleUnchecked();
	};

	const handleChecked = () => {
		if (setIsAllOnBusinessNumberButton) {
			setIsAllOnBusinessNumberButton(true);
		}
		setIsOnNotificationButton(true);
	};

	const handleUnchecked = () => {
		if (setIsAllOnBusinessNumberButton) {
			setIsAllOnBusinessNumberButton(false);
		}
		setIsOnNotificationButton(false);
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
						onChange={(e) => {
							handleCheckbox(e.target.checked);
						}}
						checked={isOnNotificationButton}
					/>
					<label htmlFor={checkboxId}>
						<i className="ico"></i>
					</label>
				</div>
			</div>
		</div>
	);
}

export default CardCheckbox;
