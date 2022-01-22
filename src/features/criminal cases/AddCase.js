import React from "react";
import BreadCrumbs from "../../app/components/BreadCrumbs";
import styled from "styled-components";

const AddCaseStyle = styled.div`
  h2 {
    margin-top: 1rem;
  }
  .content-container {
    background-color: var(--color-primary-shade);
  }
  .btn-container {
    width: 12%;
  }
`;

const AddCase = () => {
  return (
    <AddCaseStyle>
      <h1>Add new Case</h1>
      <BreadCrumbs />

      <div className="btn-container">
        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
          Add Case
        </button>
      </div>
      <h2>Culprit's Demographics</h2>
      <div data-uk-grid>
        <div class="uk-width-expand@m">
          <div class="uk-card uk-card-default uk-card-body content-container">
            <form class="uk-grid-small" data-uk-grid>
              <div class="uk-width-1-3">
                <input class="uk-input" type="text" placeholder="100" />
              </div>
              <div class="uk-width-1-3@s">
                <input class="uk-input" type="text" placeholder="50" />
              </div>
              <div class="uk-width-1-3@s">
                <input class="uk-input" type="text" placeholder="25" />
              </div>
              <div class="uk-width-1-3@s">
                <input class="uk-input" type="text" placeholder="25" />
              </div>
              <div class="uk-width-1-3@s">
                <input class="uk-input" type="text" placeholder="50" />
              </div>
              <div class="uk-width-1-3@s">
                <label class="uk-form-label" for="form-stacked-text">
                  Text
                </label>
                <input class="uk-input" type="text" placeholder="50" />
              </div>
              <div class="uk-width-1-3@s">
                <input class="uk-input" type="text" placeholder="25" />
              </div>
              <div class="uk-width-1-3@s">
                <input class="uk-input" type="text" placeholder="50" />
              </div>
              <div class="uk-width-1-3@s">
                <input class="uk-input" type="text" placeholder="50" />
              </div>
            </form>
          </div>
        </div>
        <div class="uk-width-1-4@m">
          <div class="uk-card uk-card-default uk-card-body  content-container">
            Photo upload goes here..
          </div>
        </div>
      </div>
      <h2>General Criminal Information</h2>
      <div data-uk-grid>
        <div class="uk-width-expand@m">
          <div class="uk-card uk-card-default uk-card-body content-container">
            Forms goes here
          </div>
        </div>
        <div class="uk-width-1-4@m">
          <div class="uk-card uk-card-default uk-card-body  content-container">
            Photo upload goes here..
          </div>
        </div>
      </div>
    </AddCaseStyle>
  );
};

export default AddCase;
