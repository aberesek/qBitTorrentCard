# qBittorrent Card

Egy szép, modern Home Assistant custom card a qBittorrent integráció letöltéseinek megjelenítéséhez.

## Funkciók

- 📋 **Torrent lista**: Összes aktív letöltés megjelenítése
- 📊 **Progress bar**: Százalékos letöltési állapot vizuális megjelenítése
- 🏷️ **Állapot jelző**: Színes állapot címkék (letöltés, seedelés, szüneteltetve, stb.)
- ⚡ **Sebesség**: Letöltési és feltöltési sebesség megjelenítése
- ⏱️ **ETA**: Becsült befejezési idő
- 🔄 **Auto-refresh**: Automatikus frissítés konfigurálható időközönként

## Telepítés

### 1. Buildelés

```bash
npm install
npm run build
```

A buildelt fájl a `dist/qbittorrent-card.js` lesz.

### 2. Home Assistant telepítés

1. Másold a `dist/qbittorrent-card.js` fájlt a Home Assistant `www` mappájába:
   ```
   /config/www/qbittorrent-card.js
   ```

2. Vagy használd a HACS-t (Home Assistant Community Store):
   - HACS → Frontend → Custom repositories
   - Add repository: `https://github.com/YOUR_USERNAME/qBitTorrentCard`
   - Install

### 3. Resource hozzáadása

A Home Assistant konfigurációban (`configuration.yaml` vagy UI-n keresztül):

```yaml
lovelace:
  resources:
    - url: /local/qbittorrent-card.js
      type: module
```

Vagy a Lovelace UI-ban:
- Settings → Lovelace Dashboards → Resources → Add Resource

### 4. Card hozzáadása

A Lovelace szerkesztőben:
1. Add Card → Custom: qBittorrent Card
2. Válaszd ki a qBittorrent entitást
3. Testreszabd a beállításokat

## Konfiguráció

```yaml
type: custom:qbittorrent-card
entity: sensor.qbittorrent_downloads
title: "qBittorrent Letöltések"
show_speed: true
show_eta: true
refresh_interval: 30
```

### Opciók

- `entity` (kötelező): A qBittorrent integráció entitása
- `title` (opcionális): A card címe (alapértelmezett: "qBittorrent Downloads")
- `show_speed` (opcionális): Sebesség megjelenítése (alapértelmezett: true)
- `show_eta` (opcionális): ETA megjelenítése (alapértelmezett: true)
- `refresh_interval` (opcionális): Frissítési időköz másodpercben (alapértelmezett: 30)

## Fejlesztés

### Watch mód (automatikus újra buildelés változásoknál)

```bash
npm run watch
```

### Linting

```bash
npm run lint
```

## Követelmények

- Home Assistant 2023.x vagy újabb
- qBittorrent integráció telepítve és konfigurálva
- Modern böngésző (Chrome, Firefox, Edge)

## Licenc

MIT

