function checkForShip(player, coordinates) {
  let shipPresent;
  let ship;

  for (let i = 0; i < player.ships.length; i += 1) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter(
      location => location[0] === coordinates[0] && location[1] === coordinates[1],
    );
  }
  return shipPresent.length !== 0;
}

module.exports.checkForShip = checkForShip;
