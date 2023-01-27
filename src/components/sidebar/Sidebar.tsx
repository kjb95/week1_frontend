import OneDepthSidebar from "./OneDepthSidebar";
import TwoDepthSidebar from "./TwoDepthSidebar";

function Sidebar() {
  return (
    <aside className="lnb sidebar">
      <aside className="lnb sidebar">
        <ul className="inner-lnb sidebar-menu">
          <TwoDepthSidebar
            isActive={true}
            title="새 광고 만들기"
            menus={["광고 대행 요청하기", "캠페인 만들기"]}
          />
          <OneDepthSidebar data="캠페인 관리" />
          <TwoDepthSidebar
            title="리포트"
            menus={["요약", "캠페인", "프로젝트"]}
          />
          <TwoDepthSidebar
            title="비즈머니"
            menus={["비즈머니 충전", "이용 내역"]}
          />
          <OneDepthSidebar data="설정" />
          <OneDepthSidebar data="문의하기" />
          <OneDepthSidebar data="사용 가이드" />
        </ul>
      </aside>
    </aside>
  );
}

export default Sidebar;
