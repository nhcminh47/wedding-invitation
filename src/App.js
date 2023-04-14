import "./App.css";
import flower2 from "./assets/images/flower2.png";

import Cover from "./components/Cover";
import Story from "./components/Story";
import InvitationCard from "./components/InvitationCard";
import Events from "./components/Events";
import ThankYou from "./components/ThankYou";

import { Layout } from "antd";
import Intro from "./components/Intro";
const { Content } = Layout;
function App() {
	return (
		<Content>
			<Cover />
			<Intro />
			<Story />
		</Content>
	);
}

export default App;
