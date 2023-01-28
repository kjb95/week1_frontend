interface SimpleCardSubContentsProps {
	subContents: string[];
}

function SimpleCardSubContents({ subContents }: SimpleCardSubContentsProps) {
	return (
		<div className="box-right">
			<span className="comp-txt">
				<span className="table">
					<span className="table-cell">
						{subContents.map((content, index) => (
							<li key={index}>
								<b className="fz-12 fc-6">
									<a className="txt-link" href="#!">
										{content}
									</a>
								</b>
							</li>
						))}
					</span>
				</span>
			</span>
		</div>
	);
}

export default SimpleCardSubContents;
