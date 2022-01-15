import React from "react";
import styled from "styled-components";

const BreadCrumbsStyle = styled.div`
  background-color: white;
  border-radius: 3px;
  text-transform: uppercase;
  padding: 0.7rem;
  .uk-breadcrumb {
    margin-bottom: 0;
    padding-left: 2rem;
  }

  .uk-breadcrumb > :last-child > a:not([href]),
  .uk-breadcrumb > :last-child > span {
    font-weight: 700;
    color: var(--color-dark);
  }

  .uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column)::before {
    color: var(--color-dark);
  }
  .uk-breadcrumb > * > * {
    font-size: 1.1rem;
    color: var(--color-dark);
  }
`;
const BreadCrumbs = () => {
  return (
    <BreadCrumbsStyle>
      <ul class="uk-breadcrumb">
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">criminal cases</a>
        </li>
        <li>
          <span>add new case</span>
        </li>
      </ul>
    </BreadCrumbsStyle>
  );
};

export default BreadCrumbs;
