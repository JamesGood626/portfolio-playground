import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import ServicesSlider from "../ServicesSlider";
import { serviceOptionsConfig } from "../../Config/servicesConfig";

const options = ["Commercial", "Residential"];

afterEach(cleanup);

test(`selectedService renders child componentServicesSliderOptions
      whose h2 and p elements contain correct initial values`, () => {
  expect.assertions(2);
  const { getByTestId } = render(<ServicesSlider />);
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
  const { getByTestId, getByText } = render(<ServicesSlider />);
  getByText(/residential/i).click();
  const descriptionHeaderTextNode = getByTestId("services-header-text");
  const descriptionTextNode = getByTestId("services-description-text");
  expect(descriptionHeaderTextNode.innerHTML).toEqual(
    serviceOptionsConfig.RESIDENTIAL.descriptionHeader
  );
  expect(descriptionTextNode.innerHTML).toEqual(
    serviceOptionsConfig.RESIDENTIAL.descriptionPara
  );
});

test(`ensuring quoteRequested state updates upon Get Quote button click`, () => {
  const { getByTestId, getByText } = render(<ServicesSlider />);
  getByText(/get quote/i).click();
  const serviceQuoteTotalAmountHeader = getByTestId("total-amount");
  expect(serviceQuoteTotalAmountHeader.innerHTML).toEqual("0");
});

test(`commercial number of windows slider properly increments and total amount header is updated`, async () => {
  const { getByTestId, getByText } = render(<ServicesSlider />);
  getByText(/get quote/i).click();
  const totalAmountHeader = getByTestId("total-amount");
  const sliderZeroHeader = getByTestId("slider-0-header");
  const sliderZero = getByTestId("slider-0");
  const checkBoxZero = getByTestId("checkbox-3");
  const checkBoxOne = getByTestId("checkbox-4");
  expect(totalAmountHeader.innerHTML).toEqual("0");
  expect(sliderZeroHeader.innerHTML).toEqual("Number of Windows: --");
  sliderZero.value = 5;
  await fireEvent.input(sliderZero);
  expect(sliderZeroHeader.innerHTML).toEqual("Number of Windows: 5");
  expect(totalAmountHeader.innerHTML).toEqual("0");
  fireEvent.click(checkBoxZero);
  expect(sliderZeroHeader.innerHTML).toEqual("Number of Windows: 5");
  expect(totalAmountHeader.innerHTML).toEqual("25");
});

test(`commercial number of floors slider properly increments and total amount header is updated`, async () => {
  const { getByTestId, getByText } = render(<ServicesSlider />);
  getByText(/get quote/i).click();
  const totalAmountHeader = getByTestId("total-amount");
  const sliderOneHeader = getByTestId("slider-1-header");
  const sliderOne = getByTestId("slider-1");
  expect(totalAmountHeader.innerHTML).toEqual("0");
  expect(sliderOneHeader.innerHTML).toEqual("Number of Floors: --");
  sliderOne.value = 5;
  await fireEvent.input(sliderOne);
  expect(sliderOneHeader.innerHTML).toEqual("Number of Floors: 5");
  expect(totalAmountHeader.innerHTML).toEqual("100");
});
