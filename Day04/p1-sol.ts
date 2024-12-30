function countSearchWord(input: string) {
  const grid: string[][] = []

  const wordsList = input.split('\n')

  wordsList.map((list, index) => {
    list.split('').map((char) => {
      if (!grid[index]) {
        grid[index] = []
      }
      grid[index].push(char)
    })
  })

  console.log("grid", grid);
  return input;
}

const file = Bun.file("test.txt");
const input = await file.text();

countSearchWord(input);
