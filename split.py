#!/usr/bin/env python3
"""把單檔 HTML 拆成 index.html + css/styles.css + js/script.js + assets/images/*"""
import re, os, base64, hashlib

SRC = "titansoft-vietnam-2027_5.html"
IMG_DIR = "assets/images"
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs("css", exist_ok=True)
os.makedirs("js", exist_ok=True)

html = open(SRC, encoding="utf-8").read()

# 1) 抽出所有 base64 圖片，去重後存檔，data URI 換成相對路徑
seen = {}        # content-hash -> filename
counter = [0]
EXT = {"jpeg": "jpg", "jpg": "jpg", "png": "png", "gif": "gif", "webp": "webp", "svg+xml": "svg"}

def repl(m):
    mime, b64 = m.group(1), m.group(2)
    h = hashlib.md5(b64.encode()).hexdigest()
    if h in seen:
        return seen[h]
    ext = EXT.get(mime, "bin")
    counter[0] += 1
    name = f"img-{counter[0]:02d}.{ext}"
    path = f"{IMG_DIR}/{name}"
    with open(path, "wb") as f:
        f.write(base64.b64decode(b64))
    ref = path
    seen[h] = ref
    return ref

pattern = re.compile(r"data:image/([a-zA-Z0-9.+-]+);base64,([A-Za-z0-9+/=]+)")
html = pattern.sub(repl, html)
print(f"抽出 {counter[0]} 張獨立圖片（已去重）")

# 2) 抽出 <style> -> css/styles.css，換成 <link>
def take_style(m):
    open("css/styles.css", "w", encoding="utf-8").write(m.group(1).strip() + "\n")
    return '<link rel="stylesheet" href="css/styles.css">'
html = re.sub(r"<style>(.*?)</style>", take_style, html, count=1, flags=re.S)

# 3) 抽出 <script> -> js/script.js，換成 <script src>
def take_script(m):
    open("js/script.js", "w", encoding="utf-8").write(m.group(1).strip() + "\n")
    return '<script src="js/script.js"></script>'
html = re.sub(r"<script>(.*?)</script>", take_script, html, count=1, flags=re.S)

# 4) 寫出乾淨 HTML
open("index.html", "w", encoding="utf-8").write(html)
print("產出 index.html / css/styles.css / js/script.js")
