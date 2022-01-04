module.exports = (fillValue = "no-fill", count = 1) => {
  if (Number.isNaN(count) || typeof count !== "number") {
    throw new Error("Second Argument 'count', needs to be a number type");
  }
  else if (!fillValue) {
    throw new Error ("First Argument 'fillValue' needs to be a truthy value");
  }
  else {
    /* what I'm suggesting is that we just return one variable, just one in this space */
    let resultArray = Array.from({length: count});

    /* if not a function then just perform this action */
    if (typeof fillValue !== "function") {
      resultArray = resultArray.fill(fillValue);
    }
    /* if you are here, then we'll assume that this is a function */
    else {
      for (let i = 0; i < count; ++i) {
        resultArray[i] = fillValue(i, count, resultArray);
      }
    }

    /* return to caller */
    return resultArray;
  }
};
