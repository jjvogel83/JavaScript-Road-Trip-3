//Challenge 20 (Highway to Danger Zones)

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push(location);
    for (var i = 0; i < zones.length; i++) {
      list += zones[i] + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}
