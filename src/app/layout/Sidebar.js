import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarStyles = styled.div`
  width: 18%;
  background-color: var(--color-primary);
  height: 70vh;
  padding-left: 2.5rem;
  padding-top: 8rem;

  .uk-nav-primary > li > a {
    color: white;
    line-height: 2.5;
    font-size: 1.4rem;
  }
  .uk-nav-sub {
    background-color: #212851;
    /* padding: 2rem; */
    line-height: 2.5;
  }
  .uk-nav-primary .uk-nav-sub a {
    font-size: 1.3rem;
  }
`;
const Sidebar = () => {
  return (
    <SidebarStyles>
      <div className="uk-width-1-1@m">
        <ul class="uk-nav-primary uk-nav-parent-icon" data-uk-nav>
          <li className="uk-active">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="uk-parent" data-uk-parent>
            <a href="#">Criminal Cases</a>
            <ul className="uk-nav-sub" data-uk-sub>
              <li>
                <Link to="/criminal-case/case-new">Add case</Link>
                {/* <a href="#">Add case</a> */}
              </li>
              <li>
                <a href="#">Case listings</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Notice</a>
          </li>

          <li className="uk-parent" data-uk-parent>
            <a href="#">Police Recruitments</a>
            <ul className="uk-nav-sub" data-uk-sub>
              <li>
                <Link to="/criminal-case/case-new">Add new recruitment</Link>
                {/* <a href="#">Add case</a> */}
              </li>
              <li>
                <a href="#">Recruitment listings</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Stations</a>
          </li>
          <li>
            <a href="#">First Information Reports</a>
          </li>
          <li>
            <a href="#">Dispatch</a>
          </li>
        </ul>
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
