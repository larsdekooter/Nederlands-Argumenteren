function numbersUp(start, end) {
  const values = [];
  for (start; start <= end; start++) {
    values.push(start);
  }
  return values;
}

function numbersDown(start, end) {
  const values = [];
  for (end; end >= start; end--) {
    values.push(end);
  }
  return values;
}
