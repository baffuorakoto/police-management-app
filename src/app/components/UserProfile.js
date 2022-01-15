import React from "react";
import styled from "styled-components";

const UserProfileStyle = styled.div`
  display: flex;
  p {
    margin: 0;
    color: white;
    font-size: 1.3rem;
  }
  span {
    margin: 0;
    color: var(--color-dark);
    font-size: 1.1rem;
    font-weight: 900;
  }

  .img-container {
    border: 2px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 1rem;
  }

  .img-container img {
    overflow: hidden;
    width: 100%;
  }
`;
const UserProfile = () => {
  return (
    <UserProfileStyle className="user-profile">
      <div className="img-container">
        <img
          className="uk-preserve-width uk-border-circle"
          src="./images/sakuna3.jpg"
          alt=""
        />
      </div>
      <div>
        <p>Sgt. Kwaku Acheampong</p>
        <span>P431348</span>
      </div>
    </UserProfileStyle>
  );
};

export default UserProfile;
