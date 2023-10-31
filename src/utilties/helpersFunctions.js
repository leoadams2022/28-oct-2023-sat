export function UrlFormate(input) {
  if (typeof input === "number" || typeof input === "string") {
    return input.toString().toLowerCase().split(" ").join("-");
  }
  return typeof input;
}

export function onlyLetters(inputString) {
  // Use a regular expression to match only letters (A-Z, a-z) and spaces
  var cleanString = inputString.replace(/[^a-zA-Z\s]/g, "");

  return cleanString;
}
