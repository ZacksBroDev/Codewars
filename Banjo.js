function areYouPlayingBanjo(name) {
  
  // Implement me
// return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  if (name[0].toLowerCase() === "r") {
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}