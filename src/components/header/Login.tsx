import LoginMenu from "./LoginMenu";
function Login() {
  return (
    <div className="comp-dropdown shadow">
      <a className="dropdown-toggle" data-toggle="dropdown">
        <i className="ico ico-shadow"></i>
        <span className="fz-14 fc-2 fw-medium">메이커 로그인</span>
      </a>
      <div className="dropdown-menu">
        <div className="box-body">
          <div className="input-group comp-search">
            <div className="inner-input-group selected">
              <input
                type="text"
                className="tf-comm"
                placeholder="힌트 텍스트"
              />
              <i className="ico ico-search"></i>
              <i className="ico ico-delete"></i>
            </div>
            <ul className="opt-selectbox">
              <LoginMenu isSelected={true} data="옵션" index="01" />
              <LoginMenu data="옵션" index="02" />
              <LoginMenu data="옵션" index="03" />
              <LoginMenu data="옵션" index="04" />
              <li className="comp-no-data">
                <div className="box-group">
                  <i className="ico ico-no-search"></i>
                  <p className="fz-14 fc-2">검색 결과가 없습니다.</p>
                  <p className="fz-12 fc-3">
                    검색어를 다시 입력하여 검색해주세요.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-footer">
          <button type="button" className="btn btn-tertiary-mint expand">
            메이커 로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
