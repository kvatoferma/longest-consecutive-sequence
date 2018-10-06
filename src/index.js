// module.exports =
function longestConsecutiveLength(array) {

const defaultSort = (a, b) => {
  return a - b;
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.max = function() {
    return this.sort(defaultSort).last();
}

Array.prototype.isEmpty = function() {
  return true && !(this.length > 0);
}

array.sort(defaultSort);
const sequences = [];
const countSequence = (array = [], sequence = []) => {
  const updateSequences = sequence => {
    sequences.push(sequence);
  }
  if (array.isEmpty()) {
    return updateSequences(sequence);
  }
    if ((sequence.last() === array[0] + 1) || sequence.isEmpty()) {
      sequence.push(array.shift());
      countSequence(array, sequence);
    } else {
      sequence = []
      countSequence(array, sequence);
      return updateSequences(sequence);
    }


}
countSequence(array);
sequences
const lengths = sequences.map((sequence, i) => {
  return sequence.length;
});

return lengths.max();
}



const simpleArray = [100, 4, 200, 1, 3, 2];
let res = longestConsecutiveLength(simpleArray);
res
