module.exports =
function longestConsecutiveLength(array) {
  const defaultSort = (a, b) => {
    return a - b;
  }

  const max = (a, b) => {
    return (a < b) ? b : a;
  }

  array.sort(defaultSort);
  let stack = [];
  let maxLength = 0;
  for (let index = 0; index < array.length; index++) {
    if (!stack.includes(array[index])) {
      stack.push(array[index]);
    }
    if (array[index + 1] - array[index] === 1) {
      stack.push(array[index+1]);
    } else {
      maxLength = max(maxLength, stack.length);
      stack = [];
    }
  }
  return maxLength;
}
