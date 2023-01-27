import Login from "./Login";
function HeaderMenu() {
  return (
    <div className="user-info">
      <div className="name">
        <span className="fz-14 fc-1 fw-medium">관리자명</span>
      </div>
      <a className="name">
        <span className="fz-14 fc-4">관리자 로그아웃</span>
      </a>
      <a className="notify">
        <i className="ico ico-notify"></i>
        <span className="badge">99+</span>
      </a>
      <a className="biz-money">
        <span className="auto-charge off">
          자동충전 <span className="eng">OFF</span>
        </span>
        <span className="auto-charge on">
          자동충전 <span className="eng">ON</span>
        </span>
        <span className="fz-14 fc-1 fw-medium">비즈머니</span>
        <span className="fz-14 fc-2">₩9,999,999</span>
      </a>
      <Login />
    </div>
  );
}
export default HeaderMenu;
