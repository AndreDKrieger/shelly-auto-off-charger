// Shelly Auto-Off nach Ladeende
// Schaltet den Ausgang aus, wenn die Leistung < 15 W fällt
// Prüfung alle 5 Minuten

let THRESHOLD_W  = 15;
let INTERVAL_MIN = 5;

function checkPower() {
  let sw = Shelly.getComponentStatus("switch", 0);
  if (!sw) return;

  let power  = sw.apower || 0;
  let output = sw.output;

  if (output && power < THRESHOLD_W) {
    Shelly.call("Switch.Set", { id: 0, on: false });
  }
}

Timer.set(INTERVAL_MIN * 60 * 1000, true, checkPower);
checkPower();
