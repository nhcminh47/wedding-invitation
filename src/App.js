import "./App.css";

import Cover from "./components/Cover";
import Story from "./components/Story";

import { Layout } from "antd";
import Intro from "./components/Intro";
const { Content } = Layout;
function App() {
  return (
    <Content id="app">
      <Cover />
      <Intro />
      <Story />
    </Content>
  );
}

export default App;
