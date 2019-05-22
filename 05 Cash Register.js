const checkCashRegister = (price, cash, cid) => {
  let mon = {
      "ONE HUNDRED": 100.0,
      TWENTY: 20.0,
      TEN: 10,
      FIVE: 5,
      ONE: 1,
      QUARTER: 0.25,
      DIME: 0.1,
      NICKEL: 0.05,
      PENNY: 0.01
    },
    notes = Object.keys(mon),
    whatINeed = [];
  let count = 0,
    j = 0;
  let change = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };

  // Handle edge case
  if (cid[0][1] == 0.01) return change;
  cid.reverse();

  let result = cash - price;
  let cidValue = cid.reduce((acc, val) => acc + val[1], 0);

  const findChange = num => {
    j = 0;
    for (let i in mon) {
      count = 0;
      while (num >= mon[i]) {
        count += 1;
        num = Math.round((num - mon[i]) * 100) / 100;
        if (count * mon[i] === cid[j][1]) {
          //break go to next note
          break;
        }
      }
      whatINeed.push([mon[i], count]);
      j++;
    }
  };

  if (result > cidValue) {
    return change;
  } else if (result === cidValue) {
    // do the deed
    change.change = cid.reverse();
    change.status = "CLOSED";
  } else if (result < cidValue) {
    findChange(result);
    change.status = "OPEN";
  }

  for (let i = 0; i < whatINeed.length; i++) {
    if (whatINeed[i][1] != 0) {
      change.change.push([notes[i], whatINeed[i][0] * whatINeed[i][1]]);
    }
  }
  // Here is your change, ma'am.
  return change;
};
