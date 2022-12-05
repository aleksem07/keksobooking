const givesBackRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max <= min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
givesBackRandomNumber(0, 10);

const givesRandomNumberComma = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max <= min) {
    [min, max] = [max, min];
  }
  return Math.random() * (max - min + 1) + min;
};
givesRandomNumberComma(0, 100).toFixed(5);
("");
