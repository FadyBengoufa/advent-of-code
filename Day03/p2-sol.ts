function sumOfMultiplyFunctions(input: string) {
    const regexMultiply = /mul\((\d+),(\d+)\)/g;
    const regexDont = /don't\(\)/g
    const regexDo = /do\(\)/g
  
    let result = 1;
    let match;
    let matchDont;
    let sum = 0
    let isEnabled = true
  
  
    while ((match = regexMultiply.exec(input)) !== null) {
        if(isEnabled){
            result *= parseInt(match[1]) * parseInt(match[2]);
            sum += result
            // result = 1
        }
        console.log('result', result);
    }
    
    return input;
  }
  
  const file = Bun.file("test.txt");
  const input = await file.text();
  
  sumOfMultiplyFunctions(input);