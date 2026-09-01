/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF9F6',
        panel: '#FFFFFF',
        ink: '#15171B',
        'ink-soft': '#63676E',
        'ink-faint': '#9A9DA3',
        accent: '#3E6259',
        'accent-strong': '#2C4A42',
        'accent-soft': '#E6EDE9',
        line: '#E4E1D9',
        term: '#16181C',
        'term-bar': '#1D2025',
        'term-border': '#262A30',
        'code-key': '#B39CE8',
        'code-str': '#E5B95A',
        'code-com': '#7C818A',
        'code-out': '#A9ADB4',
        'code-fg': '#E7E5DE',
        prompt: '#6FE0B8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"IBM Plex Sans"', 'sans-serif'],
        body: ['"IBM Plex Sans"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      maxWidth: {
        wrap: '920px',
      },
      boxShadow: {
        terminal: '0 18px 40px -18px rgba(20,20,20,0.35)',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
