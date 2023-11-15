import theme from '../theme';

export const labelStyle = {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '26px',
    letterSpacing: '0.09285713732242584px',
    textAlign: 'left',
  };
  
  export const inputStyle = {
    marginTop: '8px',
    width: '200px',
    border: 'none',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: '1px solid transparent',
    transition: 'border-bottom-color 0.3s ease',
  };
  
  export const textFieldStyle = {
    "& fieldset": {
      border: 'none',
      padding: '0',
    },
    "& input": {
      padding: '0',
    },
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.09285713732242584px',
    textAlign: 'left',
  };
  
  export const hoverStyle = {
    '&:hover': {
      borderBottomColor: theme.palette.secondary.main,
    },
  };
  
  export const headerTextStyle = {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary,
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '0.08px',
    textAlign: 'left',
    marginTop: 2,
    marginBottom: 3,
  };

  export  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    marginLeft: '35px',
    marginBottom: '50px',
    marginRight: '35px',
  };

  export const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 2,
  };

  export const dividerStyle = {
    borderTop: '1px solid #E3E8EB',
  };
