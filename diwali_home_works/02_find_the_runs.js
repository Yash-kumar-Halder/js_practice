function getDirection(run, curr) {
  if (run[0] > curr) return -1;
  if (run[0] < curr) return 1;
  return 0;
}

function isNewRun(run, dir, curr) {
  if (dir === 1 && run[run.length - 1] > curr) return true;
  if (dir === -1 && run[run.length - 1] < curr) return true;
  return false;
}

function findTheRun(array) {
  const stretches = [];
  for (let i = 0; i < array.length; i) {
    let dir = 0;
    const run = [];

    while (i < array.length) {
      if (isNewRun(run, dir, array[i])) break;

      dir = getDirection(run, array[i]);
      run.push(array[i++]);
    }

    stretches.push(run);
  }
  return stretches;
}

const array = [1, 1, 3, 3, 3, 2, 3, 4, 6, 1, 1, 1, 4, 2, 1, 2, 3];


console.log(findTheRun(array));
