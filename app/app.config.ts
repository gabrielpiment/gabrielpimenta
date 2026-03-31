export default defineAppConfig({
  global: {
    picture: {
      dark: '/avatar.jpg',
      light: '/avatar.jpg',
      alt: 'Minha foto de perfil'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-2xl sm:text-3xl lg:text-4xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Gabriel Pimenta.`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-whatsapp',
      'to': 'https://wa.me/5534991557772',
      'target': '_blank',
      'aria-label': 'WhatsApp do Gabriel'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/gabrielpimmenta?igsh=c2hnazRzMG5nNDVp',
      'target': '_blank',
      'aria-label': 'Instagram do Gabriel'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/gabriel-pimenta-293202232/',
      'target': '_blank',
      'aria-label': 'LinkedIn do Gabriel'
    }]
  }
})
