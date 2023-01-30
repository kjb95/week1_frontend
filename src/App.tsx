import Content from "./components/content/Content";
import Header from "./components/header/Header";
import "./wabiz/css/common.css";
import "./wabiz/css/layout.css";
import "./wabiz/css/plugin.css";
import "./wabiz/fonts/NotoSansKR/NotoSansKR.css";
import "./wabiz/fonts/Roboto/Roboto.css";

function App() {
	return (
		<div className="wrap">
			<Header />
			<Content />
		</div>
	);
}
export default App;
