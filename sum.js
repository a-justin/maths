function sum(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

module.exports = sum;
