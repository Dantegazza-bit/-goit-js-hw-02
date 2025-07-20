function getShippingCost(country) {
  const normalizedCountry = country.toLowerCase();

  switch (normalizedCountry) {
    case "china":
      return "Shipping to China will cost 100 credits";
    case "chile":
      return "Shipping to Chile will cost 250 credits";
    case "australia":
      return "Shipping to Australia will cost 170 credits";
    case "jamaica":
      return "Shipping to Jamaica will cost 120 credits";
    default:
      return "Sorry, there is no delivery to your country";
  }
}

// Тести
console.log(getShippingCost("Australia")); // Shipping to Australia will cost 170 credits
console.log(getShippingCost("Germany")); // Sorry, there is no delivery to your country
console.log(getShippingCost("China")); // Shipping to China will cost 100 credits
console.log(getShippingCost("chile")); // Shipping to Chile will cost 250 credits
console.log(getShippingCost("JAMAICA")); // Shipping to Jamaica will cost 120 credits
