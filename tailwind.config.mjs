/** @type {import('tailwindcss').Config} */

export default {
    darkMode: "class",
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'azul-50': '#D4F0FF',
                'azul-100': "#A9E2FF",
                'azul-200': "#7ED3FF",
                'azul-300': "#52C5FF",
                'azul-400': "#27B6FF",
                'azul-500': "#00A6FB",
                'azul-600': "#008ED7",
                'azul-700': "#0077B3",
                'azul-800': "#005F8F",
                'azul-900': "#00476C",
                'azul-950': "#002F48",
            },
            fontFamily: {
                'bebas': ["Bebas Neue", 'serif'],
                'suse': ['SUSE', 'serif']
            },
        },

    },
    plugins: [],
}