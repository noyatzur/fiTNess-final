import React from 'react';
import Stepper from '../components/Stepper';
import { Box } from '@mui/material'; // מייבאים את קומפוננטת ה-Box מ-Material-UI
import '../css/Register.css'; // מייבאים את קובץ ה-CSS

const Register = () => {
  return (
    <Box sx={{ paddingTop: '64px' }}> {/* מוסיפים מרווח עליון שהוא בגודל של סרגל הניווט */}
      <div className="register-container">
        <div className="register">
          <Stepper/>
        </div>
      </div>
    </Box>
  );
};

export default Register;
