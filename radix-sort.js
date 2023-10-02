// Helper function to find the maximum number in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Helper function to get the digit at a particular place value
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Main Radix Sort function
function radixSort(arr) {
  const maxDigitCount = digitCount(findMax(arr));

  for (let k = 0; k < maxDigitCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

