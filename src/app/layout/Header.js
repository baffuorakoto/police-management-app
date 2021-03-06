import React from "react";
import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import Logo from "../../assets/gps_logo_white.png";
const HeaderStyles = styled.div`
  .uk-navbar-container:not(.uk-navbar-transparent) {
    background-color: var(--color-primary) !important;
  }
  .uk-navbar-container {
  }
  .search-container {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    width: 50%;
  }
  .search-container input {
    width: 100%;
    color: white;
    text-transform: capitalize;
    font-size: 1.2rem;
  }
`;
const Header = () => {
  return (
    <HeaderStyles>
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar uk-container uk-container-small">
        <nav
          className="uk-navbar-container"
          uk-navbar
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
            zIndex: 980,
          }}
        >
          <div
            style={{
              height: "inherit",
              width: "100px",
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={Logo}
              alt=""
            />
          </div>
          <div className="search-container">
            <form>
              <div>
                <input
                  class="uk-input uk-form-width-medium uk-form-small"
                  type="text"
                  placeholder="Search for criminal records, crimes etc."
                />
              </div>
            </form>
          </div>
          <UserProfile />
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Header;
