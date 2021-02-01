
exports.min = function min (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  }
  let i = Math.min(... array);
  return i;
}

exports.max = function max (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  }
  let i = Math.max(... array);
  return i;
}

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  }
  let i = 0;
  array.forEach(item => {
    i += item;
  });
  return i / array.length;
}
