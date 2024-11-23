export const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$0000",
    frequency: "Month",
    features: [
      "Creative Business Consulting",
      "Make a Perfect Corporate",
      { feature: "Powerful Management", available: false },
      { feature: "Consulting Service Provider", available: false },
    ],
    active: false,
    delay: ".2s",
  },
  {
    title: "Standard Plan",
    price: "$0000",
    frequency: "Month",
    features: [
      "Creative Business Consulting",
      "Make a Perfect Corporate",
      "Powerful Management",
      { feature: "Consulting Service Provider", available: false },
    ],
    active: true,
    delay: ".4s",
  },
  {
    title: "Premium Plan",
    price: "$0000",
    frequency: "Month",
    features: [
      "Creative Business Consulting",
      "Make a Perfect Corporate",
      "Powerful Management",
      "Consulting Service Provider",
    ],
    active: false,
    delay: ".6s",
  },
];
