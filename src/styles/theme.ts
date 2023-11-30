export default {
  border: {
    radius: '0.5rem',
    rounded: '50%'
  },
  font: {
    Saira: 'Saira',
    thin: 100,
    normal: 400,
    medium: 500,
    bold: 700,

    sizes: {
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
    primary: '#00ACEE',
    secondary: '#9AE5F3',
    background: '#161616',
    text: '#fafafa',
    black: '#000000',
    error: '#FF6262',
    gray: '#8E8E8E',
    grayIce: '#ffffff1a',
    success: '#28A745',
    whatsapp: '#40c351'
  },
  breakpoints: {
    smallMobile: '374px',
    mobile: '599px',
    ipad: '767px',
    smallTablet: '991px',
    tablet: '1023px',
    desktop: '1199px',
    largeDestkop: '1639px'
  }
} as const;
