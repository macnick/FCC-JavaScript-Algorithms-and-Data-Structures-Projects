// not the best solution but it has simple regex.

const telephoneCheck = str => {
  // check if there a 10 or 11 digits
  let digits = str.match(/\d/g).length;
  if (digits === 11) {
    if (/^1[ ()]/.test(str)) {
      return /(\(\d{3}\)|\d{3})[\s-]*\d{3}[\s-]?\d{4}$/.test(str.slice(1));
    }
  } else if (digits === 10) {
    if (str.startsWith("(") && str.endsWith(")")) return false;
    return /(\(\d{3}\)|^\d{3})[\s-]*\d{3}[\s-]?\d{4}$/.test(str);
  }
  return false;
};
