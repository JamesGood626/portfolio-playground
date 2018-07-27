import React from "react";

export const ContactSection = () => {
  return (
    <div class="layout-contact-container">
      <section class="contact-section container">
        <h2>Contact Harvey Esquire</h2>
        <p>Please read our disclaimer first, thanks!</p>
        <form class="contact-form">
          <span class="contact-form-inputs">
            <input type="text" name="Name" placeholder="Name" />
            <input type="text" name="Email" placeholder="Email" />
          </span>
          <textarea
            class="contact-form-textarea"
            type="text"
            name="textarea"
            placeholder="How Can We Help You?"
          />
          <button class="cta-button" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

/*******************************
******* Contact Section ********
*******************************/
// .layout-contact-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   width: 100%;
//   font-size: 1.3rem;
// }

// .contact-section {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   height: 90%;
//   width: 100%;
//   padding-top: 2vh;
//   box-shadow: 0px 4px 30px -4px #555;
// }

// .contact-section > h2 {
//   margin-top: 3rem;
//   font-size: 2rem;
// }

// .contact-section > p {
//   text-align: center;
// }

// /* .contact-section > p {
//   margin-top: 0.8rem;
// } */

// .contact-form {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   margin-top: 1rem;
//   height: 70%;
//   width: 75%;
// }

// .contact-form-inputs {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 118px;
//   width: 100%;
// }

// .contact-form-inputs > input {
//   /* width for desktop */
//   height: 45%;
//   width: 100%;
//   padding-left: 1rem;
//   border-radius: 0;
//   border: 1px solid #222;
// }

// .contact-form-textarea {
//   height: 48%;
//   width: 100%;
//   padding: 1rem;
//   border-radius: 0;
//   border: 1px solid #222;
// }

// .contact-form > button {
//   color: #222;
//   border-color: #222;
//   width: 100%;
// }

// /* Specifically targeting iPhone4 */
// @media (max-height: 480px) {
//   .layout-contact-container {
//     height: 110vh;
//     font-size: 1.2rem;
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

//   .contact-form-inputs {
//     display: flex;
//     flex-direction: row;
//     height: 42px;
//   }

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
