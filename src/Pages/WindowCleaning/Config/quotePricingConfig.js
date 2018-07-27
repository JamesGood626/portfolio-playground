const residentialAndRealEstateFields = {
  service: "residential and real estate",
  multiplier: 0,
  formFields: [
    {
      id: 0,
      type: "slider",
      title: "Number of Windows",
      minRange: 1,
      maxRange: 100
    },
    {
      id: 1,
      type: "slider",
      title: "Number of Stories",
      minRange: 1,
      maxRange: 3,
      pricePer: 30
    },
    {
      id: 2,
      type: "drop_down",
      title: "Clean",
      options: ["Inside", "Outside", "Inside and Outside"],
      pricePer: [3, 5, 7], // Will need to multiply number of windows against these amounts
      multiplicand: true
    },
    {
      id: 3,
      type: "checkbox",
      title: "Waterstain Removal",
      pricePer: 5, // Will need to multiply number of windows against this amount and add to result obtained from previous calculation.
      multiplicand: true
    },
    {
      id: 4,
      type: "checkbox",
      title: "Paint Removal",
      pricePer: 9, // Same as waterstain
      multiplicand: true
    }
  ]
};

export const quotePricingConfig = {
  COMMERCIAL: {
    service: "commercial",
    multiplier: 0,
    formFields: [
      {
        id: 0,
        type: "slider",
        title: "Number of Windows",
        minRange: 1,
        maxRange: 500,
        multiplicands: [2, 3, 4]
      },
      {
        id: 1,
        type: "slider",
        title: "Number of Floors",
        minRange: 1,
        maxRange: 100,
        pricePer: 20,
        multipliers: [1.4, 1.6, 1.8, 2] // for more than 20 floors i.e. 30 floors uses multiplier of 1.2 and 100 uses 2
      },
      {
        id: 2,
        type: "drop_down",
        title: "Clean",
        options: ["Inside", "Outside", "Inside and Outside"],
        pricePer: [3, 5, 7], // Will need to multiply number of windows against these amounts
        multiplicand: true
      },
      {
        id: 3,
        type: "checkbox",
        title: "Waterstain Removal",
        pricePer: 5, // Will need to multiply number of windows against this amount and add to result obtained from previous calculation.
        multiplicand: true
      },
      {
        id: 4,
        type: "checkbox",
        title: "Paint Removal",
        pricePer: 9, // Same as waterstain
        multiplicand: true
      }
    ]
  },
  RESIDENTIAL: residentialAndRealEstateFields,
  REAL_ESTATE: residentialAndRealEstateFields,
  PRESSURE_WASHING: {
    multiplier: 0,
    service: "pressure washing",
    formFields: [
      {
        id: 0,
        type: "slider",
        title: "Number of Stories",
        minRange: 1,
        maxRange: 3,
        pricePer: 30,
        multiplicand: true
      },
      {
        id: 1,
        type: "checkbox",
        title: "Roof",
        pricePer: 60
      },
      {
        id: 2,
        type: "checkbox",
        title: "Driveway",
        pricePer: 30
      },
      {
        id: 3,
        type: "checkbox",
        title: "Patio",
        pricePer: 20
      }
    ]
  },
  SOLAR_PANEL_CLEANING: {
    service: "solar panel cleaning",
    formFields: [
      {
        id: 0,
        type: "slider",
        title: "Number of Stories",
        minRange: 1,
        maxRange: 3,
        pricePer: 30
      },
      {
        id: 1,
        type: "slider",
        title: "Number of Panels",
        minRange: 1,
        maxRange: 40,
        pricePer: 8
      }
    ]
  }
};
