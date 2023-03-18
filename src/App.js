import "./App.css";
import cover from "./assets/images/cover_img.JPG";
import flower from "./assets/images/icon_rose.png";
import flower2 from "./assets/images/flower2.png";

import Cover from "./components/Cover";
import Story from "./components/Story";
import InvitationCard from "./components/InvitationCard";
import Events from "./components/Events";
import ThankYou from "./components/ThankYou";

import { Layout } from "antd";
const { Content } = Layout;
function App() {
  return (
    <Content>
      <Cover />
    </Content>
  );
}

export default App;
