import React from "react";
import { render, cleanup } from "react-testing-library";
import ServicesSlider from "./ServicesSlider";
import { serviceOptionsConfig } from "../Config/servicesConfig";

const options = ["Commercial", "Residential"];

afterEach(cleanup);

test(`selectedService renders child componentServicesSliderOptions
      whose h2 and p elements contain correct initial values`, () => {
  expect.assertions(2);
  const { getByTestId, getByText, container } = render(<ServicesSlider />);
  // getByText(/Residential/i);
  // console.log(container.firstChild.firstChild.lastChild);
  const descriptionHeaderTextNode = getByTestId("services-header-text");
  const descriptionTextNode = getByTestId("services-description-text");
  expect(descriptionHeaderTextNode.innerHTML).toEqual(
    serviceOptionsConfig.COMMERCIAL.descriptionHeader
  );
  expect(descriptionTextNode.innerHTML).toEqual(
    serviceOptionsConfig.COMMERCIAL.descriptionPara
  );
});

test(`selectedService on ServicesSlider state updates
   when new service option is clicked the showNewServiceDescription
   function inside of ServicesSlider sets state with new selectedService,
   and rerenders ServicesDescription with the new selectedService`, () => {
  expect.assertions(2);
  const { getByTestId, getByText, container } = render(<ServicesSlider />);
  getByText(/Residential/i).click();
  const descriptionHeaderTextNode = getByTestId("services-header-text");
  const descriptionTextNode = getByTestId("services-description-text");
  expect(descriptionHeaderTextNode.innerHTML).toEqual(
    serviceOptionsConfig.RESIDENTIAL.descriptionHeader
  );
  expect(descriptionTextNode.innerHTML).toEqual(
    serviceOptionsConfig.RESIDENTIAL.descriptionPara
  );
});
