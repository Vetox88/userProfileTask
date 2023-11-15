import theme from '../theme';

export const h1 = {
  fontFamily: theme.fontFamily,
  color: theme.palette.secondary.main,
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '0.08px',
  textAlign: 'left',
  marginTop: 2,
  marginBottom: 3,
};

export const h2 = {
  fontFamily: theme.fontFamily,
  color: theme.palette.secondary.main,
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '16.8px',
  letterSpacing: '0.08px',
  textAlign: 'left',
  marginTop: 2,
  marginBottom: 3,
};

export const description = {
  fontFamily: theme.fontFamily,
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '14px',
  letterSpacing: '0.09px',
  textAlign: 'left',
  color: '#83888F',
};

const mediaQueryTypography = `@media (max-width: 600px) {
  ${h1},
  ${h2},
  ${description} {
    width: 100%;
  }
}`;

export { mediaQueryTypography };
