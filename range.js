const range = function (start, end, step) {
  const series = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      series.push(i);
    }
  }
  return series
}

console.log(range(3, 9, 2));