import localFont from "next/font/local";

/**
 * Gotham, self-hosted from /public/fonts.
 *
 * Weights are mapped onto the standard CSS scale so existing Tailwind
 * utilities pick the right cut automatically:
 *
 *   100 Thin        font-thin       — rare, large decorative use only
 *   200 ExtraLight  font-extralight
 *   300 Light       font-light
 *   400 Book        font-normal     — body copy, the "reading" weight
 *   500 Medium      font-medium     — nav links, small interactive text
 *   600 Bold*       font-semibold   — section headings, card titles, CTAs
 *   700 Bold        font-bold       — larger headings
 *   800 Black*      font-extrabold
 *   900 Black       font-black
 *   950 Ultra       font-[950]      — hero/display use only (arbitrary value)
 *
 * (*Bold is registered twice, at 600 and 700 — Gotham has no dedicated
 * Semibold cut, and this guarantees font-semibold resolves to it exactly
 * instead of relying on browser weight-matching. Same idea for Black at
 * 800/900.)
 */
const gotham = localFont({
  src: [
    { path: "../public/fonts/Gotham Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Gotham Thin Italic.ttf", weight: "100", style: "italic" },

    { path: "../public/fonts/Gotham ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Gotham ExtraLight Italic.ttf", weight: "200", style: "italic" },

    { path: "../public/fonts/Gotham Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Gotham Light Italic.ttf", weight: "300", style: "italic" },

    { path: "../public/fonts/Gotham Book.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Gotham Book Italic.ttf", weight: "400", style: "italic" },

    { path: "../public/fonts/Gotham Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Gotham Medium Italic.ttf", weight: "500", style: "italic" },

    { path: "../public/fonts/Gotham Bold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Gotham Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Gotham Bold Italic.ttf", weight: "700", style: "italic" },

    { path: "../public/fonts/Gotham Black.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/Gotham Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Gotham Black Italic.ttf", weight: "900", style: "italic" },

    { path: "../public/fonts/Gotham Ultra.ttf", weight: "950", style: "normal" },
    { path: "../public/fonts/Gotham Ultra Italic.ttf", weight: "950", style: "italic" },
  ],
  variable: "--font-gotham",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export { gotham };
