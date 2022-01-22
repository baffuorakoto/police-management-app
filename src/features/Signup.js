import React from "react";
import styled from "styled-components";

const SignupWrapper = styled.div`
  padding: 2rem;
  background-color: var(--color-primary);
  width: 30rem;
  border-radius: 1rem;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Signup = () => {
  return (
    <SignupWrapper>
      <img src="" alt="" />
      <div className="hero-txt">
        <h2
          style={{
            color: "var(--color-white)",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Crime Record
          <span style={{ display: "block", fontWeight: 300, fontSize: "1.5rem" }}>
            Management System
          </span>
        </h2>
      </div>

      <form>
        <fieldset className="uk-fieldset">
          <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Police Id" />
          </div>
          <div class="uk-margin">
            <input
              className="uk-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="uk-margin">
            <input
              className="uk-input"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
            Signup
          </button>
        </fieldset>
      </form>
    </SignupWrapper>
  );
};

export default Signup;
