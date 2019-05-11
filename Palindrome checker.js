// Palindrome Checker

function palindrome(str) {
  var newStr = str.replace(/[\/:()\s_.,_-]/g, "").toLowerCase();
  return (
    newStr ===
    newStr
      .split("")
      .reverse()
      .join("")
  );
}

// ES6

const palindrome = str => {
  let newStr = str.replace(/[\/:()\s_.,_-]/g, "").toLowerCase();
  return (
    newStr ===
    newStr
      .split("")
      .reverse()
      .join("")
  );
};
