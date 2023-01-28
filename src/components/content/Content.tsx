import "../../wabiz/css/layout.css";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import AllCheckButtonCard from "./card/AllCheckButtonCard";
import LockButtonCard from "./card/LockButtonCard";
import RegisterAccountCard from "./card/RegisterAccountCard";
import SelectCard from "./card/SelectCard";
import SimpleCard from "./card/SimpleCard";
import UpdateAccountCard from "./card/UpdateAccountCard";

function Content() {
	return (
		<div className="content">
			<Sidebar />
			<div className="inner-content">
				<div className="content-header">
					<div className="box-tit">
						<h2 className="fz-36 fc-1 fw-bold" id="contentHeaderTitle">
							설정
						</h2>
					</div>
				</div>
				<div className="content-body">
					<div className="container-fluid">
						<div className="row">
							<SimpleCard title="충전사업자번호" titleDescription={false} content="메이커명칭" />
							<SimpleCard title="휴대폰 번호" titleDescription={true} content="010-1234-5678" />
							<SimpleCard
								title="Wa-biz 약관 동의일"
								titleDescription={true}
								content="YYYY-MM-DD"
								subContents={["개인정보 처리방침 보기", "광고서비스 이용약관 보기"]}
							/>
						</div>
						<div className="row">
							<SelectCard />
						</div>
						<div className="row flex-container">
							<AllCheckButtonCard />
							<UpdateAccountCard />
						</div>
						<div className="row flex-container">
							<LockButtonCard />
							<RegisterAccountCard />
						</div>
					</div>

					<script>$('#pageTitle').text("설정"); $('#contentHeaderTitle').text("설정");</script>

					<script src="/wabiz/script/script.js"></script>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Content;
