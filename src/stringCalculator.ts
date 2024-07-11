export function add(input: string) {
  const { delimiter = ",", rest: numberString } = extractDelimiter(input);

  const numbers = parseData(numberString, delimiter);

  const negativeNumbers = numbers.filter((x) => x < 0);
  if (negativeNumbers.length)
    throw new Error(
      `Negatives not allowed! Received ${negativeNumbers.join(", ")}`
    );

  return numbers.reduce((total, x) => total + x, 0);
}

function extractDelimiter(input: string) {
  const delimiterPattern = RegExp(/\/\/(?:(.)|(?:\[(.+?)\]))\n(.*)/);
  const delimiterMatch = delimiterPattern.exec(input);

  if (delimiterMatch) {
    const [_, delimiter, rest = ""] = delimiterMatch.filter((v) => !!v);
    return { delimiter, rest };
  }

  return { rest: input };
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
    .filter((x) => x <= 1000);
}
