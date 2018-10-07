module.exports =
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

const countSequence = (array, seq = [[], []]) => {
  let sequence = seq[0];
  let sequences = seq[1];

  const updateSequences = sequence => {
    sequences.push(sequence);
  }

  if (array.isEmpty()) {
    // sequence
    return sequence;
  }

  // if (array.length === 1 && seq.isEmpty()) {
    // return array[0];
  // }

  let condition = sequence.last() === array[0] - 1 || sequence.isEmpty();

  if (condition) {
    sequence.push(array.shift());
  } else {
    updateSequences(sequence);
    sequence = [];
  }
  countSequence(array, [sequence, sequences]);
  return sequences;
}
if (array.isEmpty()) return 0;
if (array.length === 1) return 1;


const sequences = countSequence(array);
// sequences
const lengths = sequences.map(sequence => {
  return sequence.length;
});
// lengths

return lengths.max();
}

// const testEmpty = [];
// const testSingle = [1];
// const test1 = [100, 4, 200, 1, 3, 2];
//
// let empty = longestConsecutiveLength(testEmpty);
// let single = longestConsecutiveLength(testSingle);
// let test1Res = longestConsecutiveLength(test1);
// empty;
// single;
// test1Res;
