# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案性質

零相依的靜態活動官網：**鈦坦科技 2027 北越・下龍灣員工旅遊** 行程介紹頁。
純 vanilla HTML + CSS + JavaScript，**無 build／無套件管理／無框架**。語言為繁體中文（`lang="zh-Hant"`），設計刻意模仿 Apple 風格。

> 由原本的單檔 `titansoft-vietnam-2027_5.html`（5MB、所有 CSS/JS/圖片 base64 內嵌）拆解而來。
> 拆解腳本為 `split.py`，原始單檔保留作為備份；**日常編輯一律改 `index.html` 等拆解後的檔案，不要再改原始單檔。**

## 檔案結構

```
index.html              入口（約 19KB，純結構與文案）
css/styles.css          全部樣式
js/script.js            Lightbox 相簿邏輯 + 進場動畫 + GAL/META 資料
assets/images/          所有圖片（共 38 張，全部本地化）
  img-01..36.jpg        從原檔抽出的 base64 圖片（已去重）
  hotel-halong.jpg      下龍灣飯店（原 Unsplash 遠端圖，已下載）
  hotel-hanoi.jpg       河內飯店（原 Unsplash 遠端圖，已下載）
split.py                一次性拆解腳本（保留供參考，平常不需執行）
titansoft-vietnam-2027_5.html   原始單檔備份
```

整站已完全離線自包含，**無任何遠端圖片或 CDN 依賴**。

## 如何預覽

因為圖片是相對路徑外部檔，直接 `open` 在某些瀏覽器會被 file:// 限制；建議用本地伺服器：

```bash
python3 -m http.server 8000   # 然後開 http://localhost:8000
```

## `index.html` 區塊順序（由上而下）

1. `<nav>` — sticky 毛玻璃導覽列，錨點連到下列各 section 的 `id`。
2. `<header class="hero">` — 首屏，背景為 `assets/images/img-01.jpg`。
3. `#highlights` — 旅程亮點卡片（`.hcard`），每張 `onclick="openGallery(theme,0)"` 開相簿。
4. `#itinerary` — 五天四夜垂直時間軸（`.timeline` / `.tl-item`）。
5. `#hotels` — 住宿（`.hotel`），背景圖為 `hotel-halong.jpg` / `hotel-hanoi.jpg`。
6. `#flight` — 長榮航班表 + 台灣接駁集合時間。
7. `#info` — 三梯次報名資訊、房間分配、取消政策、FAQ。
8. `#price` — 團費與補助級距。
9. `<footer>` + Lightbox 容器（`#lb`）。

## `js/script.js` 架構

- **`GAL`** — `{ themeKey: ["assets/images/img-NN.jpg", ...] }`，每個主題的相簿圖片陣列。
- **`META`** — `{ themeKey: { title, sub, desc, caps:[每張說明], src } }`，相簿文字資訊。
- 主題 key：`halong`、`oldquarter`、`train`、`food`、`grandworld`、`cruise`。
  **`GAL`、`META`、`#highlights` 卡片的 `onclick` 三者 theme key 必須一致。**
- Lightbox：`openGallery(theme,idx)` → `setSlide(i)` → `navGallery(d)` / `closeGallery()`；支援鍵盤 `Esc` / `←` / `→`。
- 進場動畫：`IntersectionObserver` 監看所有 `.reveal` 元素，進入視窗時加 `.in` class（CSS 控制淡入上移）。

## 編輯注意事項

- **改文案**（行程、日期、價格、航班）→ 改 `index.html` 對應 section 的純文字。
- **改樣式** → 改 `css/styles.css`（配色：主藍 `#0a84ff` / `#0071e3`、灰底 `#f5f5f7`、文字 `#1d1d1f`）。
- **換／加相簿圖片** → 把圖放進 `assets/images/`，同步更新 `js/script.js` 的 `GAL[theme]`（路徑）、`META[theme]`（`caps` 等文字），以及該 `.hcard` 上 `.hcard-count` 的張數標示。
- **新增亮點主題** → 同時在 `index.html` 加 `.hcard`（含 `onclick`）＋ `js/script.js` 的 `GAL`/`META` 加同名 key。
- 內容為對外公告性質，數字（價格、補助、罰金%、集合時間、航班時刻）以公司／福委會文件為準，修改前請與來源核對。
