const containerStyle = {
    marginLeft: '30px',
    marginTop: '50px',
  };
  
  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const headerStyle = {
    marginTop: '10px',
  };
  
  const chipStyle = {
    margin: '2px',
  };
  
  const buttonStyle = {
    textTransform: 'none',
    borderRadius: '25px',
  };
  
  const mediaQueryContainer = `@media (max-width: 600px) {
    ${containerStyle},
    ${flexContainerStyle},
    ${headerStyle},
    ${chipStyle},
    ${buttonStyle} {
      width: 100%;
    }
  }`;
  
  export {
    containerStyle,
    flexContainerStyle,
    headerStyle,
    chipStyle,
    buttonStyle,
    mediaQueryContainer,
  };
  