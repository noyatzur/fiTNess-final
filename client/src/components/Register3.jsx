import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import '../css/Register.css';

export default function Register3() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="form-container">
          <h2>תן לנו להכיר אותך טוב יותר</h2>
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Knee"
            id="filled-adornment-knee"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Knee',
            }}
            helperText="Enter your Knee circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Ankle"
            id="filled-adornment-ankle"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Ankle',
            }}
            helperText="Enter your Ankle circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Biceps"
            id="filled-adornment-biceps"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Biceps',
            }}
            helperText="Enter your Biceps circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Forearm"
            id="filled-adornment-forearm"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Forearm',
            }}
            helperText="Enter your Forearm circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Wrist"
            id="filled-adornment-wrist"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Wrist',
            }}
            helperText="Enter your Wrist circumference"
            className="form-field"
          />
        </Box>
      </form>
    </div>
  );
}
