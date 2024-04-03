module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      width: {
        recaptcha: '304px', // recaptcha width
      },
      fontFamily: {
        roboto: ['Roboto, sans-serif'],
        poppins: ['Poppins, sans-serif'],
      },
      fontSize: {
        base: '1rem',
      },
      letterSpacing: {
        hero: '0.0rem',
        logo: '0.5rem',
      },
      colors: {
        black: 'hsl(0, 0%, 15%)',
        white: 'hsl(0, 0%, 100%)',
      },
      lineHeight: {
        full: '100%',
      },
      boxShadow: {
        custom:
          '0 -2px 4px rgba(0,0,0,0.02), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.05), 0 8px 8px rgba(0,0,0,0.05), 0 16px 16px rgba(0,0,0,0.05);',
      },
      screens: {
        xxs: '360px',
        400: '400px',
        xs: '480px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        desktopLg: '1536px',

        tall: { raw: '(min-height: 900px)' },
        tallMobile: { raw: '(orientation: portrait) and (max-width: 500px)' },
        tabletTall: { raw: '(orientation: portrait) and (min-width: 501px)' },
        tabletBigLandscape: { raw: '(orientation: landscape) and (min-height: 900px)' },
      },
      animation: {
        shake: 'shake 1.5s infinite',
        wiggle: 'wiggle 0.8s infinite',
        menuAppear: 'appear 0.2s 1 ease-in-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        wiggle: {
          '0%': { transform: 'rotate(-16deg)' },
          '20%': { transform: 'rotate(16deg)' },
          '40%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shake: {
          '0%': { transform: 'translate(2px, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-2px, 0) rotate(1deg)' },
          '50%': { transform: 'translate(2px, 0) rotate(1deg)' },
          '75%': { transform: 'translate(-2px, 0) rotate(0deg)' },
          '100%': { transform: 'translate(2px, 0) rotate(0deg)' },
        },
        appear: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      outline: {
        green: '2px solid #00cc00',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
