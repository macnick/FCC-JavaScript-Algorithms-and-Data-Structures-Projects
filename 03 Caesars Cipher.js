// Just replace the letters using a callback function
function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

// ES 6

const rot13 = str =>
  str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
