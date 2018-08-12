import React, { Component } from "react";
import styled from "styled-components";
import "../Styles/main.css";
import { FlexColJCStartAICenterDiv } from "../../../LayoutStyledComponents";

// const SliderInput = styled.input`
//   margin: 0;
//   color: blue;
//   background: lime;
//   thumb: blue;
// `;

const FormContainerDiv = FlexColJCStartAICenterDiv.extend`
  height: 24rem;
  width: 70%;
`;

const TotalAmountCounter = styled.h3`
  margin: 1rem 0;
  font-size: 2.4rem;
  color: #999;
  font-family: ${props => props.theme.mainFont};
`;

const SelectSpan = styled.span`
  position: relative;

  &:after {
    content: ">";
    display: block;
    position: absolute;
    color: #fcfcfc;
    top: 32%;
    right: 5%;
    transform: rotate(90deg);
  }
`;

const Select = styled.select`
  position: relative;
  padding: 0 0 0 10px;
  font-size: 0.9rem;
  // Gets rid of the arrows
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  width: 10rem;
  height: 2.4rem;
  margin: 0.5rem 0;
  border-radius: 0;
  color: #fcfcfc;
  background: ${props => props.theme.primaryColor};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

// Didn't end up using this due to not having a reliable source
// of state to update the label text to the corresponding selected option

// const Label = styled.label`
//   display: block;
//   position: relative;
//   width: 10rem;
//   height: 2.4rem;
//   margin: 0.5rem 0;
// `;

// const LabelTextSpan = styled.span`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 100%;
//   background: #fcfcfc;
//   color: #fcfcfc;
//   pointer-events: none;
//   position: absolute;
//   top: 0;
//   right: 0;
//   left: 0;
//   bottom: 0;
//   background: ${props => props.theme.primaryColor};

// &:after {
//   content: ">";
//   display: block;
//   position: absolute;
//   top: 27%;
//   right: 10%;
//   transform: rotate(90deg);
// }
// `;

const renderSliderInput = (field, index, formValues, updateFormVal) => {
  return (
    <div className="slide-container" key={index}>
      <p data-testid={`slider-${index}-header`}>
        {`${field.title}: `}
        {formValues[index] ? formValues[index].value : "--"}
      </p>
      <input
        type="range"
        min={field.minRange}
        max={field.maxRange}
        className={field.type}
        id={field.id}
        onInput={updateFormVal}
        data-testid={`slider-${index}`}
      />
    </div>
  );
};

const renderDropDownInput = (field, index, formValues, updateFormVal) => {
  return (
    <SelectSpan key={index}>
      <Select id={field.id} className={field.type} onChange={updateFormVal}>
        {field.options.map((option, i) => {
          return (
            <option
              className={field.type}
              value={field.pricePer[i]}
              key={`option-${i}`}
            >
              {option}
            </option>
          );
        })}
      </Select>
    </SelectSpan>
  );
};

const renderCheckboxInput = (field, index, formValues, updateFormVal) => {
  return (
    <div className="checkbox-quoteform" key={index}>
      <input
        type="checkbox"
        id={field.id}
        className={field.type}
        name="feature"
        value={field.pricePer}
        onClick={updateFormVal}
        data-testid={`checkbox-${index}`}
      />
      <label htmlFor={field.id}>{field.title}</label>
    </div>
  );
};

const renderFormFields = (quotePricing, formValues, updateFormVal) => {
  return quotePricing.formFields.map((field, i) => {
    if (field.type === "slider") {
      return renderSliderInput(field, i, formValues, updateFormVal);
    }
    if (field.type === "drop_down") {
      return renderDropDownInput(field, i, formValues, updateFormVal);
    }
    if (field.type === "checkbox") {
      return renderCheckboxInput(field, i, formValues, updateFormVal);
    }
    return null;
  });
};

const calculatePrices = (multiplier, quotePricing, formValues) => {
  return quotePricing.formFields.reduce((acc, curr) => {
    if (
      typeof curr.multipliers === "object" &&
      typeof formValues[curr.id] === "object"
    ) {
      const value = formValues[curr.id].value;
      if (value < 20) {
        const calculation = value * curr.pricePer;
        acc += calculation;
        return acc;
      } else if (value >= 20 && value < 40) {
        const calculation = value * curr.pricePer * curr.multipliers[0];
        acc += calculation;
        return acc;
      } else if (value >= 40 && value < 60) {
        const calculation = value * curr.pricePer * curr.multipliers[1];
        acc += calculation;
        return acc;
      } else if (value >= 60 && value < 80) {
        const calculation = value * curr.pricePer * curr.multipliers[2];
        acc += calculation;
        return acc;
      } else {
        const calculation = value * curr.pricePer * curr.multipliers[3];
        acc += calculation;
        return acc;
      }
    }
    if (
      formValues[curr.id] &&
      typeof formValues[curr.id] === "object" &&
      curr.multiplicand
    ) {
      const calculation = multiplier * formValues[curr.id].value;
      acc += calculation;
      return acc;
    }
    if (
      typeof curr.multiplicand !== "boolean" &&
      typeof formValues[curr.id] === "object" &&
      curr.pricePer
    ) {
      const calculation = formValues[curr.id].value * curr.pricePer;
      acc += calculation;
      return acc;
    }
    return acc;
  }, 0);
};

const calculatePressureWashingPrices = (quotePricing, formValues) => {
  const multiplier = quotePricing.multiplier;
  return quotePricing.formFields.reduce((acc, curr) => {
    if (typeof formValues[curr.id] === "object") {
      if (curr.id === multiplier) {
        const calculation = formValues[curr.id].value * curr.pricePer;
        acc += calculation;
        return acc;
      } else if (formValues[curr.id].value !== null) {
        acc += formValues[curr.id].value;
        return acc;
      }
    }
    return acc;
  }, 0);
};

const calculateSolarPanelCleaning = (quotePricing, formValues) => {
  return quotePricing.formFields.reduce((acc, curr) => {
    if (typeof formValues[curr.id] === "object") {
      const calculation = formValues[curr.id].value * curr.pricePer;
      acc += calculation;
      return acc;
    }
    return acc;
  }, 0);
};

const calculateTotal = (quotePricing, formValues, total) => {
  let newTotal;
  const { service } = quotePricing;
  if (service !== "pressure washing" && service !== "solar panel cleaning") {
    const multiplierIndex = quotePricing.multiplier;
    const multiplier =
      typeof formValues[multiplierIndex] === "object"
        ? formValues[multiplierIndex].value
        : 0;
    newTotal = calculatePrices(multiplier, quotePricing, formValues);
  }

  if (service === "pressure washing") {
    newTotal = calculatePressureWashingPrices(quotePricing, formValues);
  } else if (service === "solar panel cleaning") {
    newTotal = calculateSolarPanelCleaning(quotePricing, formValues);
  }

  if (total !== newTotal) {
    return Math.round(newTotal);
  } else {
    return total;
  }
};

export default class ServiceQuoteForm extends Component {
  state = {
    formValues: {},
    total: 0
  };

  updateFormVal = async e => {
    const newVal = e.target.value;
    const fieldId = e.target.id;
    const type = e.target.className;
    if (type === "checkbox" && !e.target.checked) {
      await this.setState((prevState, state) => ({
        formValues: {
          ...prevState.formValues,
          [fieldId]: { ...prevState.formValues[fieldId], value: null }
        }
      }));
    } else {
      await this.setState((prevState, state) => ({
        formValues: {
          ...prevState.formValues,
          [fieldId]: { ...prevState.formValues[fieldId], type, value: newVal }
        }
      }));
    }
    const newTotal = calculateTotal(
      this.props.quotePricing,
      this.state.formValues,
      this.state.total
    );
    this.setTotal(newTotal);
  };

  setTotal = async total => {
    await this.setState((prevState, state) => ({
      ...prevState,
      total
    }));
  };

  render() {
    const { quotePricing } = this.props;
    const { formValues, total } = this.state;
    return (
      <FormContainerDiv data-testid="services-quote-form">
        {
          <TotalAmountCounter data-testid="total-amount">
            {total}
          </TotalAmountCounter>
        }
        {renderFormFields(quotePricing, formValues, this.updateFormVal)}
      </FormContainerDiv>
    );
  }
}
