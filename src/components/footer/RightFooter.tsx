interface RightFooterPros {
    datas: string[];
}

function RightFooter({ datas }: RightFooterPros) {
    return (
        <ul className="footer-menu">
            {datas.map((data, index) => (
                <li key={index}>
                    <a className="fz-13" href="#!">
                        {data}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default RightFooter;
