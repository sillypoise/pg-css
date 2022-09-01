/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx,jsx,js}"],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [require("tailwindcss-logical")],
};
