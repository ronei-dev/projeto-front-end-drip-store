export default{
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx,css}",
    ],
    theme: {
        extend: {
            fontfamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#C71585',
                'dark-grey-2': '#A9A9A9',
            },
        },
    },
    plugins: [],
}