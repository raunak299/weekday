export function formatSalaryText(minJdSalary, maxJdSalary, salaryCurrencyCode) {
  let formattedText = "";

  if (minJdSalary && maxJdSalary) {
    formattedText = `${minJdSalary} - ${maxJdSalary} LPA`;
  } else if (!maxJdSalary && minJdSalary) {
    formattedText = `${minJdSalary} LPA`;
  } else if (!minJdSalary && maxJdSalary) {
    formattedText = `${maxJdSalary} LPA`;
  }

  // Add currency code if it's provided
  if (salaryCurrencyCode && formattedText.length) {
    formattedText = `${salaryCurrencyCode} ${formattedText}`;
  }

  return formattedText;
}
