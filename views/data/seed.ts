const seed = [
  {
    calories: 110,
    servingSize: {
      amount: 148,
      unit: 'g'
    },
    name: 'Potato',
    macros: [
      {
        amount: 0,
        type: 'Total Fat',
        unit: 'g',
        subnutrients: [
          {
            type: 'Saturated Fat',
            amount: 0,
            unit: 'g'
          },
          {
            type: 'Trans Fat',
            amount: 0,
            unit: 'g'
          }
        ]
      },
      {
        amount: 0,
        type: 'Cholesterol',
        unit: 'g'
      },
      {
        amount: 0,
        type: 'Sodium',
        unit: 'g'
      },
      {
        amount: 26,
        type: 'Carbohydrates',
        unit: 'g',
        subnutrients: [
          {
            type: 'Dietary Fiber',
            amount: 2,
            unit: 'g'
          },
          {
            type: 'Total Sugars',
            amount: 1,
            unit: 'g',
            subnutrients: [
              {
                type: 'Added Sugars',
                amount: 0,
                unit: 'g'
              }
            ]
          }
        ]
      },
      {
        amount: 3,
        type: 'Protein',
        unit: 'g'
      }
    ],
    micros: [
      {
        type: 'Vitamin D',
        amount: 0,
        unit: 'mcg'
      },
      {
        type: 'Calcium',
        amount: 20,
        unit: 'mcg'
      },
      {
        type: 'Iron',
        amount: 1.1,
        unit: 'mcg'
      },
      {
        type: 'Potassium',
        amount: 620,
        unit: 'mcg'
      },
      {
        type: 'Vitamin C',
        amount: 27,
        unit: 'mcg'
      },
      {
        type: 'Vitamin B6',
        amount: 0.2,
        unit: 'mcg'
      }
    ],
    warning: 'The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 Calories a day is used for general nutrition advice.'
  },
  {
    calories: 95,
    servingSize: {
      amount: 182,
      unit: 'g'
    },
    name: 'Apple',
    macros: [
      {
        amount: 0.3,
        type: 'Total Fat',
        unit: 'g',
        subnutrients: [
          {
            type: 'Saturated Fat',
            amount: 0.1,
            unit: 'g'
          },
          {
            type: 'Trans Fat',
            amount: 0,
            unit: 'g'
          }
        ]
      },
      {
        amount: 0,
        type: 'Cholesterol',
        unit: 'g'
      },
      {
        amount: 2,
        type: 'Sodium',
        unit: 'g'
      },
      {
        amount: 25,
        type: 'Carbohydrates',
        unit: 'g',
        subnutrients: [
          {
            type: 'Dietary Fiber',
            amount: 4.4,
            unit: 'g'
          },
          {
            type: 'Total Sugars',
            amount: 19,
            unit: 'g',
            subnutrients: [
              {
                type: 'Added Sugars',
                amount: 0,
                unit: 'g'
              }
            ]
          }
        ]
      },
      {
        amount: 0.5,
        type: 'Protein',
        unit: 'g'
      }
    ],
    micros: [
      {
        type: 'Vitamin D',
        amount: 0,
        unit: 'mcg'
      },
      {
        type: 'Calcium',
        amount: 20,
        unit: 'mcg'
      },
      {
        type: 'Iron',
        amount: 1.1,
        unit: 'mcg'
      },
      {
        type: 'Potassium',
        amount: 1950,
        unit: 'mcg'
      },
      {
        type: 'Vitamin C',
        amount: 27,
        unit: 'mcg'
      },
      {
        type: 'Vitamin B6',
        amount: 0.2,
        unit: 'mcg'
      }
    ],
    warning: 'The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 Calories a day is used for general nutrition advice.'
  }
];

module.exports = seed;