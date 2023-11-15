export const appBar = {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid #ccc",
  };
  
  export const toolbar = {
    display: "flex",
    justifyContent: "space-between",
  };
  
  export const userInfoContainer = {
    display: "flex",
    alignItems: "center",
    marginBottom: "50px",
    marginTop: "50px",
  };
  
  export const avatarContainer = {
    backgroundColor: "#FAFAFA",
    borderRadius: "50%",
    overflow: "hidden",
    position: "relative",
    width: 120,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  export const avatar = {
    width: "100%",
    height: "100%",
    backgroundColor: "#E3E8EB",
    border: "1px solid gray",
    position: "relative",
  };
  
  export const personIcon = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "gray",
    fontSize: 60,
  };
  
  export const textContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
    width: "15vw",
    height: 120,
  };
  
  export const buttonContainer = {
    display: "flex",
    alignItems: "center",
    width: "100%", 
    height: 38,
    whiteSpace: "nowrap",
    borderRadius: 5,
    padding: "12px 20px",
    gap: 8,
    color: "#1976D2",
  };
  
  export const dropzone = {
    width: "100%",
    height: "100%",
    border: "2px dashed #ccc",
    borderRadius: "5px",
    padding: "20px",
    cursor: "pointer",
  };
  
  export const centerContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };
  
  const mediaQueryUserInfo = `@media (max-width: 600px) {
    ${userInfoContainer},
    ${avatarContainer},
    ${textContainer},
    ${buttonContainer} {
      width: 100%;
    }
  }`;
  
  export { mediaQueryUserInfo };
  