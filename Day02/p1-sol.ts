function totalSafeReports(input: string) {
  let reports: number[][] = [];

  // Prepare input
  input.split(/\n/).map((report, idx) => {
    reports.push(report.split(/\s+/).map((num) => parseInt(num)));
  });

  let count = 0;
  for (let i = 0; i < reports.length; i++) {
    if (isSafe(reports[i])) count++;
  }
  console.log("Number of safe ✅ reports ", count);
  return count;
}

function isSafe(report: number[]) {
  if (isSequenceSafe(report)) return true;

  // Second part solution with the added condition by removing one level
  // TODO : Refactor this
  for (let i = 0; i < report.length; i++) {
    const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isSequenceSafe(modifiedReport)) return true;
  }

  return false;
}

function isSequenceSafe(report: number[]) {
  let isIncreasingCount = 0;
  let isDecreasingCount = 0;
  // Is report sequence increasing or decreasing
  for (let i = 1; i < report.length; i++) {
    const diff = Math.abs(report[i] - report[i - 1]);
    if (report[i - 1] <= report[i] && diff >= 1 && diff <= 3) {
      isIncreasingCount++;
    } else if (report[i - 1] >= report[i] && diff >= 1 && diff <= 3) {
      isDecreasingCount++;
    }
  }

  return (
    isIncreasingCount === report.length - 1 ||
    isDecreasingCount === report.length - 1
  );
}

const file = Bun.file("input.txt");
const input = await file.text();

totalSafeReports(input);
