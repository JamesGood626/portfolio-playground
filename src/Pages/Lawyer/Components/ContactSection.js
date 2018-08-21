import React from "react";
import styled from "styled-components";
import { SubmitButton } from "./SubmitButton";
import {
  FlexColJCAICenterSection,
  FlexColJCStartAICenterDiv
} from "../../../LayoutStyledComponents";

const ContactContainerSection = FlexColJCAICenterSection.extend`
  width: 100%;
  font-size: 1.3rem;
`;

const ContactContainerInnerDiv = FlexColJCStartAICenterDiv.extend`
  align-self: center;
  width: 90%;
  max-width: 60rem;
  margin: 10vh 0;
  padding-top: 2vh;
  box-shadow: 0px 4px 30px -4px #555;

  & > h2 {
    margin-top: 4vh;
    margin-bottom: 0.4rem;
    font-family: ${props => props.theme.mainFont};
    font-size: ${props => props.theme.headerLevelTwoFontSize};
  }

  & > p {
    text-align: center;
    font-family: ${props => props.theme.secondaryFont};
    font-size: ${props => props.theme.paraFontSize};
  }

  @media (min-width: 500px) {
    & > h2 {
      font-size: ${props => props.theme.headerLevelTwoFontSize500VW};
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 4vh;
  margin-bottom: 10vh;
  height: 70%;
  width: 75%;

  @media (max-width: 500px) {
    width: 85%;
  }
`;

const ContactFormInputSpan = styled.span`
  // background: lime;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
  width: 100%;
  margin-bottom: 0.4rem;

  & > input {
    /* width for desktop */
    height: 40px;
    width: 100%;

    padding-left: 1rem;
    border-radius: 0;
    border: 1px solid #222;
    @media (min-width: 900px) {
      margin-bottom: 1.2rem;
    }
  }

  & > button {
    color: #222;
    border-color: #222;
    width: 100%;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 0;
  }
`;

const EmailInput = styled.input`
  @media (min-width: 900px) {
    margin-left: 1.2rem;
  }
`;

const ContactFormTextArea = styled.textarea`
  height: 250px;
  width: 100%;
  padding: 1rem;
  border-radius: 0;
`;

export const ContactSection = () => {
  return (
    <ContactContainerSection>
      <ContactContainerInnerDiv>
        <h2>Contact Howard Edwards</h2>
        <p>Please read our disclaimer first, thanks!</p>
        <StyledForm>
          <ContactFormInputSpan>
            <input type="text" name="Name" placeholder="Name" />
            <EmailInput type="text" name="Email" placeholder="Email" />
          </ContactFormInputSpan>
          <ContactFormTextArea
            type="text"
            name="textarea"
            placeholder="How Can We Help You?"
          />
          <SubmitButton changeBorderOnHover={true}>Submit</SubmitButton>
        </StyledForm>
      </ContactContainerInnerDiv>
    </ContactContainerSection>
  );
};

// </ContactFormInputSpan>

/*******************************
 ******* Contact Section ********
 *******************************/
// /* Specifically targeting iPhone4 */
// @media (max-height: 480px) {
//     .layout-contact-container {
//       height: 110vh;
//       font-size: 1.2rem;
//       background: blue;
//     }
//   }
//   .contact-section {
//     height: 90%;
//   }

//   .contact-form {
//     justify-content: space-between;
//   }

//   .contact-form-inputs {
//     height: 84px;
//   }

//   .contact-form-inputs > input {
//     height: 43%;
//   }

//   .contact-form-textarea {
//     height: 51.5%;
//   }
// }

// @media (min-width: 742px) {
//   .contact-section {
//     height: 90vh;
//   }

//   .contact-form {
//     justify-content: space-between;
//     height: 50%;
//   }

// .contact-form-inputs {
//   display: flex;
//   flex-direction: row;
//   height: 42px;
// }

//   .contact-form-inputs > input {
//     height: 100%;
//     width: 48.5%;
//   }

//   .contact-form-textarea {
//     height: 78%;
//   }

//   .contact-form > button {
//     width: 260px;
//   }
// }
