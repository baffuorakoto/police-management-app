import React from "react";
import { Route, Routes } from "react-router";
import DashboardPage from "../../features/dashboard/DashboardPage";
import AddCase from "../../features/criminal cases/AddCase";

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
        <Route path="/criminal_case/new" element={<AddCase />} />
      </Routes>
    </PageAreaStyle>
  );
};

export default PageArea;
