import React from "react";
import { Route, Routes } from "react-router";
import DashboardPage from "../../features/dashboard/DashboardPage";

import styled from "styled-components";

const PageAreaStyle = styled.div`
  width: 70%;
  padding-left: 2rem;
  flex: 1;
`;
const PageArea = () => {
  return (
    <PageAreaStyle>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
      </Routes>
    </PageAreaStyle>
  );
};

export default PageArea;
