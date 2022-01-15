import React from "react";
import BreadCrumbs from "../../app/components/BreadCrumbs";
import styled from "styled-components";

const DashboardPageStyle = styled.div`
  h1 {
    color: white;
    text-transform: uppercase;

    font-size: 1.8rem;
    font-weight: bolder;
  }
`;
const DashboardPage = () => {
  return (
    <DashboardPageStyle>
      <h1>Dashboard</h1>
      <BreadCrumbs />
    </DashboardPageStyle>
  );
};

export default DashboardPage;
