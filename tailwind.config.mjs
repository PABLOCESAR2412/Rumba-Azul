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
                'verde-50': '#DDF3DE',
                'verde-100': "#BBE8BE",
                'verde-200': "#99DC9D",
                'verde-300': "#77D17C",
                'verde-400': "#55C55B",
                'verde-500': "#3CB043",
                'verde-600': "#339739",
                'verde-700': "#2B7E30",
                'verde-800': "#226526",
                'verde-900': "#1A4B1D",
                'verde-950': "#113213",
                'naranja-50': '#FFEFD5',
                'naranja-100': "#FFDFAA",
                'naranja-200': "#FFCF80",
                'naranja-300': "#FFBE55",
                'naranja-400': "#FFAE2B",
                'naranja-500': "#FF9E00",
                'naranja-600': "#DB8700",
                'naranja-700': "#B67100",
                'naranja-800': "#925A00",
                'naranja-900': "#6D4400",
                'naranja-950': "#492D00",
            },
            fontFamily: {
                'bebas': ["Bebas Neue", 'serif'],
                'suse': ['SUSE', 'serif']
            },
        },

    },
    plugins: [],
}