import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import '../css/Register.css';

export default function InputAdornments() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="form-container">
          <h2>תן לנו להכיר אותך טוב יותר </h2>
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
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Neck"
            id="filled-adornment-Neck"
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
              'aria-label': 'chest',
            }}
            helperText="Enter your Chest circumference"
            className="form-field"
          />
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Abdomen"
            id="filled-adornment-Abdomen"
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
              'aria-label': 'hip',
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
          <TextField
            sx={{ mb: 2 }}
            variant="filled"
            label="Knee"
            id="filled-adornment-Knee"
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
            id="filled-adornment-Ankle"
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
            id="filled-adornment-Biceps"
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
            id="filled-adornment-Forearm"
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
            id="filled-adornment-Wrist"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              'aria-label': 'Wrist',
            }}
            helperText="Enter your Wrist circumference"
            className="form-field"
          />

          <FormControl sx={{ mb: 2, alignSelf: 'center' }} component="fieldset">
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <button type="submit" className="form-submit">Submit</button>
        </Box>
      </form>
    </div>
  );
}
