Drop real project/company logos here to replace the generated lettermark
fallback. The site checks for these exact filenames at build time (SVG is
checked first, then PNG):

  istoria.svg    or  istoria.png
  onestudio.svg  or  onestudio.png
  darent.svg     or  darent.png
  captab.svg     or  captab.png

If a file isn't found, the site falls back to a clean generated monogram
(first letter of the project name on its accent colour) — no broken images,
no extra network request.

Recommended: square SVGs (or PNGs at least 112x112 for retina), transparent
background, no padding baked into the file — the component already adds a
rounded container around it.
