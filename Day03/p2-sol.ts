function sumOfMultiplyFunctions(input: string) {
    const regexMultiply = /mul\((\d+),(\d+)\)/g;
    const regexDont = /don't\(\)/g
    const regexDo = /do\(\)/g
  
    let match;
    let sum = 0
    let isEnabled = true

    const regex = /(?:mul\((\d+),(\d+)\)|do\(\)|don't\(\))/g;
  
    while ((match = regex.exec(input)) !== null) {
        // console.log('Found:', {
        //     fullMatch: match[0],
        //     position: match.index,
        //     type: match[1] ? 'multiply' : match[0]
        // });

        if (match[0] === 'do()') {
            isEnabled = true
        } 
        else if (match[0] === "don't()") {
            isEnabled = false
        }
        else {
            if(isEnabled)
                sum += parseInt(match[1]) * parseInt(match[2]);
        }
    }
    
    console.log('sum', sum);
    return input;
  }
  
  const file = Bun.file("input.txt");
  const input = await file.text();
  
  sumOfMultiplyFunctions(input);