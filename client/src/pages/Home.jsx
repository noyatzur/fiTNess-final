import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import pic1 from '../SliderImg/pic1.jpg';
import pic2 from '../SliderImg/pic2.jpg';
import pic3 from '../SliderImg/pic3.jpg';
import pic4 from '../SliderImg/pic4.jpg';
import pic5 from '../SliderImg/pic5.jpg';
import HebrewLink from '../components/loginComp';
import '../css/Home.css';


const images = [
  { imgPath: pic1 },
  { imgPath: pic2 },
  { imgPath: pic3 },
  { imgPath: pic4 },
  { imgPath: pic5 },
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleIndexChange = (index) => {
    setActiveStep(index);
  };

  return (
    <>
 
        <section className='personalStory'>
            <div className='font-bold underline'>
                twrtsgsgsdsdf
            </div>

        </section>
        <section className='recomendtionCustomers'>

        </section>
        <section className='recomendToRegister'>

        </section>
     
    </>

  );
}

export default Home;
