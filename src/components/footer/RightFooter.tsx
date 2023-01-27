interface RightFooterPros {
  datas: string[];
}

function RightFooter({ datas }: RightFooterPros) {
  return (
    <ul className="footer-menu">
      {datas.map((data) => (
        <li>
          <a className="fz-13">{data}</a>
        </li>
      ))}
    </ul>
  );
}

export default RightFooter;
