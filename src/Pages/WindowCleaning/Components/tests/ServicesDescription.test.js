import React from "react";
import { render, cleanup } from "react-testing-library";
import { ServicesDescription } from "../ServicesDescription";
import { serviceOptionsConfig } from "../../Config/servicesConfig";

afterEach(cleanup);

describe("ensuring ServiceDescription renders the appropriate service description text", () => {
  test(`renders commercial service description if commercial is passed as selectedService props`, () => {
    expect.assertions(2);
    const { getByTestId, getByText, container } = render(
      <ServicesDescription
        selectedService={serviceOptionsConfig.COMMERCIAL.serviceOptionText}
        serviceOptionsConfig={serviceOptionsConfig}
      />
    );
    const descriptionHeaderTextNode = getByTestId("services-header-text");
    const descriptionTextNode = getByTestId("services-description-text");
    expect(descriptionHeaderTextNode.innerHTML).toEqual(
      serviceOptionsConfig.COMMERCIAL.descriptionHeader
    );
    expect(descriptionTextNode.innerHTML).toEqual(
      serviceOptionsConfig.COMMERCIAL.descriptionPara
    );
  });

  test(`renders commercial service description if residential is passed as selectedService props`, () => {
    expect.assertions(2);
    const { getByTestId, getByText, container } = render(
      <ServicesDescription
        selectedService={serviceOptionsConfig.RESIDENTIAL.serviceOptionText}
        serviceOptionsConfig={serviceOptionsConfig}
      />
    );
    const descriptionHeaderTextNode = getByTestId("services-header-text");
    const descriptionTextNode = getByTestId("services-description-text");
    expect(descriptionHeaderTextNode.innerHTML).toEqual(
      serviceOptionsConfig.RESIDENTIAL.descriptionHeader
    );
    expect(descriptionTextNode.innerHTML).toEqual(
      serviceOptionsConfig.RESIDENTIAL.descriptionPara
    );
  });

  test(`renders commercial service description if real estate is passed as selectedService props`, () => {
    expect.assertions(2);
    const { getByTestId, getByText, container } = render(
      <ServicesDescription
        selectedService={serviceOptionsConfig.REAL_ESTATE.serviceOptionText}
        serviceOptionsConfig={serviceOptionsConfig}
      />
    );
    const descriptionHeaderTextNode = getByTestId("services-header-text");
    const descriptionTextNode = getByTestId("services-description-text");
    expect(descriptionHeaderTextNode.innerHTML).toEqual(
      serviceOptionsConfig.REAL_ESTATE.descriptionHeader
    );
    expect(descriptionTextNode.innerHTML).toEqual(
      serviceOptionsConfig.REAL_ESTATE.descriptionPara
    );
  });

  test(`renders commercial service description if pressure washing is passed as selectedService props`, () => {
    expect.assertions(2);
    const { getByTestId, getByText, container } = render(
      <ServicesDescription
        selectedService={
          serviceOptionsConfig.PRESSURE_WASHING.serviceOptionText
        }
        serviceOptionsConfig={serviceOptionsConfig}
      />
    );
    const descriptionHeaderTextNode = getByTestId("services-header-text");
    const descriptionTextNode = getByTestId("services-description-text");
    expect(descriptionHeaderTextNode.innerHTML).toEqual(
      serviceOptionsConfig.PRESSURE_WASHING.descriptionHeader
    );
    expect(descriptionTextNode.innerHTML).toEqual(
      serviceOptionsConfig.PRESSURE_WASHING.descriptionPara
    );
  });

  test(`renders commercial service description if solar panel cleaning is passed as selectedService props`, () => {
    expect.assertions(2);
    const { getByTestId, getByText, container } = render(
      <ServicesDescription
        selectedService={
          serviceOptionsConfig.SOLAR_PANEL_CLEANING.serviceOptionText
        }
        serviceOptionsConfig={serviceOptionsConfig}
      />
    );
    const descriptionHeaderTextNode = getByTestId("services-header-text");
    const descriptionTextNode = getByTestId("services-description-text");
    expect(descriptionHeaderTextNode.innerHTML).toEqual(
      serviceOptionsConfig.SOLAR_PANEL_CLEANING.descriptionHeader
    );
    expect(descriptionTextNode.innerHTML).toEqual(
      serviceOptionsConfig.SOLAR_PANEL_CLEANING.descriptionPara
    );
  });
});

// describe("ensuring ServiceDescription renders the appropriate fields for the ServiceQuoteForm based upon quoteRequested", () => {
//   test(`renders ServiceQuoteForm on`)
// }
