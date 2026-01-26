function towerBuilder(nFloors) {
  let tower = [];
  const width = nFloors * 2 - 1;
  
  for (let i = 0; i < nFloors; i++) {
    let stars = '*'.repeat(i * 2 + 1);
    let spaces = ' '.repeat((width - stars.length) / 2);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}
