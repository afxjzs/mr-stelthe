module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		fontFamily: {
      'sans': ['Raleway', 'ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Raleway'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
	],
	"files.associations": {
		"*.css": "tailwindcss"
	},
	"editor.quickSuggestions": {
		"strings": true
	},
	"tailwindCSS.emmetCompletions": true
};
