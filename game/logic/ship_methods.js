function checkForShip(player, coordinates) {
  let shipPresent;
  let ship;

  for (let i = 0; i < player.ships.length; i += 1) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter(
      location => location[0] === coordinates[0] && location[1] === coordinates[1],
    );
    if (shipPresent.length > 0) return true;
  }
  return false;
}

function damageShip(ship, coordinates) {
  let damagedShip;
  if (ship.locations.length > 0) {
    damagedShip = ship.locations.filter(
      location => location[0] === coordinates[0] && location[1] === coordinates[1],
    );
  }
  if (damagedShip) {
    ship.damage.push(coordinates);
  }
  return ship;
}

function fire(player, coordinates) {
  const foundShip = checkForShip(player, coordinates);
  if (foundShip) {
    const shipMatch = player.ships.filter(ship =>
      ship.locations.filter(
        location => location[0] === coordinates[0] && location[1] === coordinates[1],
      ),
    );
    if (shipMatch.length > 0) {
      damageShip(shipMatch[0], coordinates);
    }
  }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
