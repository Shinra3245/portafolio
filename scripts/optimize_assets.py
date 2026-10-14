"""Generate WebP copies for the portfolio; keep the original assets intact.

Run with Python and Pillow: python3 scripts/optimize_assets.py
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
groups = [("src/assets/images", 1600), ("src/assets/certificates", 1800)]
files = []
for directory, size in groups:
    files.extend((path, size) for path in (ROOT / directory).rglob("*")
                 if path.suffix.lower() in {".png", ".jpg", ".jpeg"})
for name in ["2k_earth_daymap", "2k_earth_clouds"]:
    files.append((ROOT / f"src/assets/textures/{name}.jpg", 1536))

before = after = 0
for source, size in files:
    target = source.with_suffix(".webp")
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        image.thumbnail((size, size), Image.Resampling.LANCZOS)
        if image.mode not in {"RGB", "RGBA"}:
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")
        image.save(target, "WEBP", quality=84, method=6)
    before += source.stat().st_size
    after += target.stat().st_size
    for module in (ROOT / "src").rglob("*"):
        if module.suffix in {".jsx", ".js", ".css"}:
            text = module.read_text()
            updated = text.replace(source.name, target.name)
            if updated != text:
                module.write_text(updated)

print(f"{len(files)} optimized copies: {before / 1048576:.2f} MB -> {after / 1048576:.2f} MB")
