/** @type {import('tailwindcss').Config} */
export default {
    content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
          extend: {
                  colors: {
                            primary: "#f59e0b",
                            secondary: "#10b981",
                            "bg-deep": "#08080a",
                            "bg-darker": "#0f172a",
                            text: {
                                        main: "#f8fafc",
                                        secondary: "#94a3b8",
                            },
                  },
                  fontFamily: {
                            orbitron: ['Orbitron', 'sans-serif'],
                  },
          },
    },
    plugins: [],
}
