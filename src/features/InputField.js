import { TextField } from '@mui/material';
import theme from '../theme';
import { labelStyle, inputStyle, textFieldStyle, hoverStyle } from '../styles/InputFieldStyle'


const InputField = (label, value, field, editMode, handleChange) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label style={labelStyle}>{label}</label>
    <TextField
      sx={{ ...textFieldStyle, ...hoverStyle }}
      value={value}
      disabled={!editMode}
      onChange={handleChange(field)}
      style={{
        ...inputStyle,
        borderBottomColor: editMode ? theme.palette.secondary.main : 'transparent',
        ...hoverStyle,
      }}
      InputProps={{
        disableUnderline: true,
      }}
    />
  </div>
);

export default InputField;
