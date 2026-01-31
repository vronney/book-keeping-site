import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1e3a5f", // Deep blue
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#c9a227", // Warm gold
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#4a9b9b", // Soft teal
                    foreground: "#ffffff",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
