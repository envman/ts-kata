export function add(input: string) {
  let delimiter = ",";
  if (input.substring(0, 2) === "//") {
    delimiter = input.substring(2, 3);
  }
  const numberString = input.replace(`//${delimiter}\n`, "");

  const numbers = parseData(numberString, delimiter);

  const negativeNumbers = numbers.filter((x) => x < 0);
  if (negativeNumbers.length)
    throw new Error(
      `Negatives not allowed! Received ${negativeNumbers.join(", ")}`
    );

  return numbers.reduce((total, x) => total + x, 0);
}

function parseData(numberString: string, delimiter: string) {
  if (!numberString.length) {
    return [];
  }

  return numberString
    .split("\n")
    .join(delimiter)
    .split(delimiter)
    .map((x) => parseInt(x))
    .filter(x => x <= 1000);
}
