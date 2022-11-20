
  // loop over each number in the array
  arr.forEach(number => {
    // for each number in the array,
    // if it doesnt exist already as a key in the object,
    // create one and set its value to 1

    if (!arrayObject[number]) {
      arrayObject[number] = 1;
    } else {
      // if it already exist, increment its value by 1;
      arrayObject[number]++;
    }
  });


  // return object key with the highest value:
  let highestValue = 0;
  let highestValueKey = -Infinity;

  for (let key in arrayObject) {
    const value = arrayObject[key];
    if (value > highestValue) {
      highestValue = value;
      highestValueKey = key;
    }
  }
  // convert key back to number
  return Number(highestValueKey);
};


console.log(mode([6, 2, 3, 4, 9, 6, 1, 0, 5]));
