interface LeftFooterProps {
    datas: string[];
}

function LeftFooter({ datas }: LeftFooterProps) {
    return (
        <ul className="company-info">
            {datas.map((data, index) => (
                <li key={index}>
                    <span className="fz-13">{data}</span>
                </li>
            ))}
        </ul>
    );
}

export default LeftFooter;
