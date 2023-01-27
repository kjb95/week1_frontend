interface OneDepthSidebarPros {
  data: string;
}

function OneDepthSidebar({ data }: OneDepthSidebarPros) {
  return (
    <li className="one-depth treeview">
      <a href="#!">{data}</a>
    </li>
  );
}

export default OneDepthSidebar;
