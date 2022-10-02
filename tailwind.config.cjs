/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/main.tsx", 
            "./src/Login.tsx",
            "./src/Dashboard.tsx",
            "./src/App.tsx"],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
