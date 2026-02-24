module.exports = {
  prefix: '',
  content: [
    './src/**/*.{html,ts,scss}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-text': 'var(--primary-text)',
        'primary-bg': 'var(--primary-bg)',
        'primary-color': 'var(--primary-color)',
      },
      gridTemplateColumns: {
        'fill-200': 'repeat(auto-fill,minmax(200px,1fr))',
      },
      backgroundImage: {
        'hoso-sidebar':
          'linear-gradient(0deg, var(--bg-sidebar-bottom) 0%, var(--bg-sidebar-top) 100%)',
      },
      screens: {
        'max-md': { max: '767px' },
        'min-xxl': { min: '1745px' },
        'min-xl': { min: '1366px' },
        'min-2xl': { min: '1440px' },
        'min-2xxl': { min: '2560px' },
        xs: { min: '425px' },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
