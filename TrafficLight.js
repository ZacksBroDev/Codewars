function updateLight(current) {
  // return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else if (current == "red") {
    return "green";
  } else {
    return "invalid";
  }
}
