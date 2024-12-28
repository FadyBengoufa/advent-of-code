function sumOfMultiplyFunctions(input: string) {
  const regexMultiply = /mul\((\d+),(\d+)\)/g;

  let result = 1;
  let match;
  let sum = 0


  while ((match = regexMultiply.exec(input)) !== null) {
    result *= parseInt(match[1]) * parseInt(match[2]);
    sum += result
    result = 1
  }
  console.log("sum", sum);
  return input;
}

const file = Bun.file("input.txt");
const input = await file.text();

sumOfMultiplyFunctions(input);