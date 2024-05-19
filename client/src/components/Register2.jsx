import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';

export default function Register2() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    navigate('/register3');
  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="form-container">
          <h2>תן לנו להכיר אותך טוב יותר</h2>
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Neck"
            id="filled-adornment-neck"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Neck',
            }}
            helperText="Enter your Neck circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Chest"
            id="filled-adornment-chest"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Chest',
            }}
            helperText="Enter your Chest circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Abdomen"
            id="filled-adornment-abdomen"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Abdomen',
            }}
            helperText="Enter your Abdomen circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Hip"
            id="filled-adornment-hip"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Hip',
            }}
            helperText="Enter your Hip circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Thigh"
            id="filled-adornment-thigh"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'thigh',
            }}
            helperText="Enter your Thigh circumference"
            className="form-field"
          />
          <button type="submit">Next</button>
        </Box>
      </form>
    </div>
  );
}
