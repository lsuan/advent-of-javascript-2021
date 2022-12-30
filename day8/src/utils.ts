export const daysOfWeekMap = {
  0: "SUN",
  1: "MON",
  2: "TUES",
  3: "WED",
  4: "THUR",
  5: "FRI",
  6: "SAT",
};

export const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  "partly-cloudy": { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

export const getKeyFromId = (id: number) => {
  if (id >= 600 && id <= 622) {
    return "snowy";
  } else if (id >= 200 && id <= 232) {
    return "stormy";
  } else if (id >= 300 && id <= 531) {
    return "rainy";
  } else if (id === 801) {
    return "partly-cloudy";
  } else if (id >= 802 && id <= 804) {
    return "cloudy";
  } else {
    return "sunny";
  }
};
