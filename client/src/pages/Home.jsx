import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import pic1 from '../SliderImg/pic1.jpg';
import pic2 from '../SliderImg/pic2.jpg';
import pic3 from '../SliderImg/pic3.jpg';
import pic4 from '../SliderImg/pic4.jpg';
import pic5 from '../SliderImg/pic5.jpg';
import HebrewLink from '../components/loginComp';
import '../css/Home.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  { imgPath: pic1 },
  { imgPath: pic2 },
  { imgPath: pic3 },
  { imgPath: pic4 },
  { imgPath: pic5 },
];

function SwipeableTextMobileStepper() {
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
        <section className='imageCarousel'>
            <Box className="page_container">
                        <Box className="upper_container">
                            <Typography variant="h4">?גם אתם רוצים לעשות שינוי</Typography>
                            <Paper square elevation={0}>
                            <Typography className="steeper_text">המפעל שלנו גאה להציג</Typography>
                            </Paper>
                            <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleIndexChange}
                            enableMouseEvents
                            interval={2000} // Interval for auto play
                            className="img_container"
                            >
                            {images.map((step, index) => (
                                <div key={index} className={`image_wrapper ${activeStep === index ? 'active' : ''}`}>
                                <img src={step.imgPath} alt={`Pic ${index + 1}`} />
                                </div>
                            ))}
                            </AutoPlaySwipeableViews>
                            <div className="mobile-stepper">
                            <Button
                                size="small"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                className="stepper-button"
                            >
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                אחורה
                            </Button>
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                                className="stepper-button"
                            >
                                הבא
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                            <HebrewLink text="טקסט בעברית" loginPage="./pages/Login" />
                            </div>
                        </Box>
                        <Box className="lower-container">
                            {/* Content for lower part */}
                        </Box>
            </Box>
        </section>
        <section className='personalStory'>

        </section>
        <section className='recomendtionCustomers'>

        </section>
        <section className='recomendToRegister'>

        </section>
     
    </>

  );
}

export default SwipeableTextMobileStepper;
