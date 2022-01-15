import styled from "styled-components";
import Header from "./Header";

import GlobalStyle from "../../globalStyles";
import PageArea from "./PageArea";
import Sidebar from "./Sidebar";
function App() {
  return (
    <AppWrapper className="App">
      <GlobalStyle />
      <Header />
      <main
        style={{ display: "flex", marginTop: "5rem" }}
        className="uk-container uk-container-large"
      >
        <Sidebar />
        <PageArea />
      </main>
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;

export default App;
