interface TwoDepthSidebarProps {
	isActive?: boolean;
	title: string;
	menus: string[];
	isFirstSelect?: boolean;
}

function TwoDepthSidebar({ isActive, title, menus, isFirstSelect }: TwoDepthSidebarProps) {
	return (
		<li className={"one-depth treeview " + isActive ? "active" : ""}>
			<a href="#!">
				{title}
				<i className="ico ico-arrow"></i>
			</a>
			<ul className="two-depth treeview-menu">
				{menus.map((menu, index) => (
					<li className={isFirstSelect && index === 0 ? "selected" : ""} key={index}>
						<a href="#!">{menu}</a>
					</li>
				))}
			</ul>
		</li>
	);
}

export default TwoDepthSidebar;
