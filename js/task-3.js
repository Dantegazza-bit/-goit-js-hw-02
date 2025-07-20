function checkForSpam(message) {
  // Приводимо все повідомлення до нижнього регістру
  const lowerMessage = message.toLowerCase();

  // Перевіряємо, чи є в ньому "spam" або "sale"
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

// Тести з умови (залиш для перевірки)
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("SPAM")); // true
console.log(checkForSpam("SALE")); // true
