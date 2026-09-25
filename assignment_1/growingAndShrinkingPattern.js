// function pattern(number) {
//   if (number === 1) return "*";
//   return `* ${pattern(number - 1)}`;
// }

// function shrinking(number) {
//   if (number === 1) return "*";
//   return `${pattern(number)}\n${shrinking(number - 1)}`;
// }

// function growing(number) {
//   if (number === 0) return "";

//   const str = pattern(number) + "\n";
//   return `${growing(number - 1)}${str}`;
// }

// function growingAndShrinking(number) {
//   return growing(number) + shrinking(number - 1);
// }

// const res = growingAndShrinking(5);
// console.log(res);

// ===============================
// Optimised & Clean version    ||
// ===============================

function createStarRow(starCount) {
  if (starCount <= 0) return "\n";
  return `* ${createStarRow(starCount - 1)}`;
}

function createGrowingAndShrinkingPattern(maxRow, currentRow = 0) {
  if (currentRow === maxRow) return createStarRow(maxRow);
  return (
    createStarRow(currentRow) +
    createGrowingAndShrinkingPattern(maxRow, currentRow + 1) +
    createStarRow(currentRow)
  );
}

const pattern = createGrowingAndShrinkingPattern(5);
console.log(pattern);
