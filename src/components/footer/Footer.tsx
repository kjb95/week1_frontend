import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

function Footer() {
  return (
    <footer className="content-footer">
      <LeftFooter
        datas={[
          "와디즈(주)",
          "대표이사 : 신혜성",
          "사업자등록번호 : 258-87-01370",
          "주소 : 경기 성남시 분당구 판교로 242 PDC A동 402호",
        ]}
      />
      <RightFooter datas={["이용 약관", "개인정보 처리 방침"]} />
    </footer>
  );
}

export default Footer;
