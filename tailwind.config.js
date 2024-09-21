/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      animation: {
        "draw-highlight": "drawHighlight 0.5s linear forwards"
      },
      keyframes: {
        drawHighlight: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" }
        }
      }
    }
  },
  variants: {
    extend: {
      scale: ["group-hover"]
    }
  },
  plugins: []
};
