import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';

export default function Register1() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    navigate('/register2');
  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="form-container">
          <h2>תן לנו להכיר אותך טוב יותר</h2>
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Age"
            id="filled-adornment-Age"
            type="number"
            InputProps={{
              inputProps: { min: 18, max: 120 },
              endAdornment: <InputAdornment position="end">Age</InputAdornment>,
              'aria-label': 'Age',
            }}
            helperText="Enter your Age"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Weight"
            id="filled-adornment-weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              'aria-label': 'weight',
            }}
            helperText="Enter weight in kg"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Height"
            id="filled-adornment-height"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'height',
            }}
            helperText="Enter your height in cm"
            className="form-field"
          />
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <button type="submit">Next</button>
        </Box>
      </form>
    </div>
  );
}
