# shelly-auto-off-charger

Ein einfaches Shelly-Script, das ein angeschlossenes Ladegerät automatisch
vom Netz trennt, sobald der Ladevorgang beendet ist.

Der Ausgang wird ausgeschaltet, wenn die gemessene Leistung unter **15 Watt**
fällt. Die Prüfung erfolgt **alle 5 Minuten**.

Das Script läuft vollständig **lokal auf dem Shelly**, ohne Cloud
und ohne Internetverbindung.

---

## Motivation

Viele Akku-Ladegeräte ziehen auch nach Ladeende weiterhin eine geringe
Standby-Leistung.  
In Werkstätten oder Ladestationen bleiben Ladegeräte oft dauerhaft eingesteckt.

Dieses Script sorgt dafür, dass das Ladegerät nach dem vollständigen Laden
automatisch stromlos geschaltet wird.

Geeignet für:
- Werkzeug-Akkus (z. B. Bosch, Makita, Dewalt, Einhell, …)
- Werkstatt-Ladestationen
- Dauerhaft eingesteckte Ladegeräte

---

## Funktionsweise

1. Der Shelly misst kontinuierlich die Wirkleistung des angeschlossenen Geräts.
2. Alle **5 Minuten** wird geprüft:
   - Ausgang ist eingeschaltet
   - Leistung liegt unter **15 Watt**
3. Sind beide Bedingungen erfüllt, wird der Ausgang ausgeschaltet.

Die 15-Watt-Schwelle liegt deutlich über typischem Standby-Verbrauch,
aber weit unter jeder realen Ladeleistung.

---

## Script

Das Script befindet sich hier:
src/auto_off_15w_5min.js
https://github.com/AndreDKrieger/shelly-auto-off-charger/blob/main/src/auto_off_15w_5min.js

1. Link öffnen
2. Auf **Raw** klicken
3. Gesamten Inhalt markieren
4. In die Shelly Weboberfläche kopieren


