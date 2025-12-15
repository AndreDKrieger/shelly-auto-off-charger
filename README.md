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

https://github.com/AndreDKrieger/shelly-auto-off-charger/blob/main/src/auto_off_charger_15w_5min.js

1. Link öffnen
2. Auf **Raw** klicken
3. Gesamten Inhalt markieren
4. In die Shelly Weboberfläche kopieren

---

## Video-Anleitung (YouTube)

Die vollständige Schritt-für-Schritt-Anleitung inklusive
Hintergrund, Erklärung der Schwellenwerte und Live-Demonstration
findet sich im zugehörigen YouTube-Video.

YouTube-Kanal:  
https://www.youtube.com/@AndreDKrieger

👉 Das konkrete Video wird hier ergänzt, sobald es veröffentlicht ist.

---

## Installation (Shelly Weboberfläche)

1. Shelly-Weboberfläche öffnen (`http://<IP-des-Shelly>`)
2. Menü **Scripts** öffnen
3. **Add script / Create script**
4. Script-Code einfügen
5. **Save**
6. **Run on startup** aktivieren
7. Script **Starten**
8. Shelly ggf. **neu starten**

Nach einem Neustart läuft das Script automatisch weiter.

---

## Getestete Geräte

- **Shelly Plug S Gen3** ✅  
  Getestet mit Firmware: **1.7.1 (20250924)**
- **Shelly Plus Plug S** ✅
  Getestet mit Firmware: **1.3.3 (20240625)**
  Getestet mit Firmware: **1.7.1 (20250924)**
- **Shelly Mini 1 PM Gen3** ✅  
  Getestet mit Firmware: **1.4.0 (20240726)**
- **Shelly Plus 1 PM** ✅ 
  Getestet mit Firmware: **1.3.3 (20240625)**
- **Shelly 1 PM Gen3** ✅  
  Getestet mit Firmware: **1.3.3 (20240625)**
  Getestet mit Firmware: **1.7.1 (20250924)**

Nicht funktionsfähig mit Geräten der ersten Generation sowie "AZ" Serie
---

## Bekannte Einschränkungen

- Der **Shelly Plug S Gen3** zeigt eine dauerhaft blaue Status-LED
  (WLAN/Matter), die firmwarebedingt nicht vollständig deaktiviert werden kann.
- Für einen komplett unauffälligen Betrieb werden folgende Geräte empfohlen:
  - Shelly Plus Plug S (Gen2)
  - Shelly 1PM Mini Gen3
  - Shelly 1 Pro PM Gen3

---

## Standalone-Betrieb

- Keine Cloud erforderlich
- Keine Internetverbindung erforderlich
- Vollständig lokale Ausführung
- Funktioniert auch nach Stromausfall automatisch weiter

---

## Sicherheitshinweis

Dieses Script ist für Ladegeräte und kleine Verbraucher gedacht.  
Die maximale Belastbarkeit des verwendeten Shelly-Geräts ist zu beachten.
Nicht für Heizgeräte, große Motoren oder andere Hochlast-Verbraucher verwenden.

---

## Lizenz

Dieses Projekt steht unter der **MIT License**.  
Details siehe Datei `LICENSE`.

