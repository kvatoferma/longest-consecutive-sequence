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

const countSequence = (array, seq = [[], []]) => {
  let sequence = seq[0];
  let sequences = seq[1];
  const updateSequences = sequence => {
    sequences.push(sequence);
  }

  if (array.isEmpty()) {
    return seq;
  }

  let condition = sequence.last() === array[0] - 1 || sequence.isEmpty();

  if (condition) {
    sequence.push(array.shift());
  } else {
    if (sequence.length > 1) updateSequences(sequence);
    sequence = [];
  }
  countSequence(array, [sequence, sequences]);
  return sequences;
}

const sequences = countSequence(array);
sequences;
const lengths = sequences.map(sequence => {
  return sequence.length;
});

return lengths.max();
}
