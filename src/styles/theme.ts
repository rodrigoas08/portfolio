export default {
  border: {
    radius: '0.5rem',
    rounded: '50%'
  },
  font: {
    family: {
      nunito: "'Nunito Sans', sans-serif",
      inter: "'Inter', sans-serif",
      josefin: "'Josefin Sans', sans-serif",
      roboto: "'Roboto', sans-serif",
      montserrat: "'Montserrat', sans-serif"
    },
    italic: 'italic',
    light: 100,
    normal: 400,
    bold: 600,
    extraBold: 900,

    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
      xxxlarge: '2.8rem'
    }
  },
  spacings: {
    xxxsmall: '0.5rem',
    xxsmall: '1rem',
    xsmall: '1.5rem',
    small: '2rem',
    medium: '3rem',
    large: '4rem',
    xlarge: '5rem',
    xxlarge: '6rem'
  },
  colors: {
    alabaster: '#fafafa',
    black: '#000000',
    error: '#FF6262',
    primary: '#00ACEE',
    secondary: '#9AE5F3',
    gray: '#8E8E8E',
    text: '#777777',
    success: '#28A745',
    grayIce: '#ffffff1a',
    whatsapp: '#40c351'
  },
  breakpoints: {
    mobile: '599px',
    ipad: '767px',
    smallTablet: '991px',
    tablet: '1023px',
    desktop: '1199px',
    largeDestkop: '1639px'
  }
} as const;
