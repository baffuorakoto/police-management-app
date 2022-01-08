import styled from "styled-components";


import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./features/Signup";
function App() {
  return (
    <AppWrapper className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;

export default App;
