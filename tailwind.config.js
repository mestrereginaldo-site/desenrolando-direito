/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cores do modo escuro
        'deep-navy': 'hsl(220 25% 15%)',
        'gold-accent': 'hsl(45 90% 55%)',
        'neutral-bg': 'hsl(220 15% 10%)',
        
        // Cores do modo claro
        'light-navy': 'hsl(220 40% 20%)',
        'warm-white': 'hsl(40 20% 98%)',
        'soft-gray': 'hsl(220 10% 95%)',
        
        // Cores de conteúdo
        'body-dark': 'hsl(220 8% 85%)',
        'body-light': 'hsl(220 30% 25%)',
        'muted-text': 'hsl(220 5% 60%)',
        'link-blue': 'hsl(210 100% 60%)'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
