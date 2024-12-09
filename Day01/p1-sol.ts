function totalDistance(input: string) {
  let list1: number[] = [];
  let list2: number[] = [];

  input
    .trim()
    .split(/\s+/)
    .map((num, idx) => {
      if (idx % 2 === 0) list1.push(parseInt(num));
      else list2.push(parseInt(num));
    });

  list1.sort();
  list2.sort();

  if(list1.length !== list2.length){
    throw new Error("List lengths are not equal")
  }

  let sum = 0
  for(let i = 0; i < list1.length; i++){
    const distance = Math.abs(list1[i] - list2[i])
    sum = sum + distance
  }

  console.log('sum is', sum)

  return sum
}

const file = Bun.file("input.txt");
const input = await file.text();

totalDistance(input);
