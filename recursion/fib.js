function fibs(n) {
  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

// console.log(fibs(8));

function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  const fibs = fibsRec(n - 1);
  const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
  fibs.push(nextFib);

  return fibs;
}

// console.log(fibsRec(8));

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  //Split the array into two halves
  const mid = Math.floor(array.length / 2);
  const l_half = array.slice(0, mid);
  const r_half = array.slice(mid);

  //sort each half
  const sortedLeft = mergeSort(l_half);
  const sortedRight = mergeSort(r_half);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
let arr = [2, 5, 1, 4, 3, 6];
console.log(mergeSort(arr));
