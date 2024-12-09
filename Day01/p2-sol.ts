function similarityScore(input: string) {
    let list1: number[] = [];
    let list2: number[] = [];
  
    input
      .trim()
      .split(/\s+/)
      .map((num, idx) => {
        if (idx % 2 === 0) list1.push(parseInt(num));
        else list2.push(parseInt(num));
      });
    
      let sumScore = 0
      for(let i = 0; i < list1.length; i++){
        let count = 0
        for(let j = 0; j < list2.length; j++){
            if(list1[i] === list2[j]) count++
        }        
        sumScore += list1[i] * count
      }

      return sumScore
}
  
const file = Bun.file("input.txt");
const input = await file.text();

similarityScore(input);
  