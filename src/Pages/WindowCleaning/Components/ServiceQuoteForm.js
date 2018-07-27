import React, { Component } from "react";

const renderSliderInput = (field, index, formValues, updateFormVal) => {
  return (
    <div className="slidecontainer" key={index}>
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
    <select
      id={field.id}
      className={field.type}
      key={index}
      onChange={updateFormVal}
    >
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
    </select>
  );
};

const renderCheckboxInput = (field, index, formValues, updateFormVal) => {
  return (
    <div key={index}>
      <input
        type="checkbox"
        id={field.id}
        className={field.type}
        name="feature"
        value={field.pricePer}
        onClick={updateFormVal}
        data-testid={`checkbox-${index}`}
      />
      <label htmlFor={field.pricePer}>{field.title}</label>
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
  });
};

const calculatePrices = (
  multiplierIndex,
  multiplier,
  quotePricing,
  formValues
) => {
  return quotePricing.formFields.reduce((acc, curr) => {
    if (curr === multiplierIndex) {
      return acc;
    }
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
        acc += parseInt(formValues[curr.id].value);
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
    newTotal = calculatePrices(
      multiplierIndex,
      multiplier,
      quotePricing,
      formValues
    );
  }

  if (service === "pressure washing") {
    newTotal = calculatePressureWashingPrices(quotePricing, formValues);
  } else if (service === "solar panel cleaning") {
    newTotal = calculateSolarPanelCleaning(quotePricing, formValues);
  }

  if (total !== newTotal) {
    return Math.round(newTotal);
  } else {
    return 0;
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
      <div data-testid="services-quote-form">
        {<h1 data-testid="total-amount">{total}</h1>}
        {renderFormFields(quotePricing, formValues, this.updateFormVal)}
      </div>
    );
  }
}
