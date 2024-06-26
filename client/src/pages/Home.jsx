import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import backImg from '../img/backImg.jpg';
import pic1 from '../SliderImg/pic1.jpg';
import pic2 from '../SliderImg/pic2.jpg';
import pic3 from '../SliderImg/pic3.jpg';
import pic4 from '../SliderImg/pic4.jpg';
import pic5 from '../SliderImg/pic5.jpg';
import HebrewLink from '../components/loginComp';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import LoginComp from '../components/loginComp';
import ElevatorCounter from '../components/ElevatorCounter'; // Import ElevatorCounter component
import ImageCarousel from '../components/ImageCarousel';

// const images = [
//   { imgPath: pic1 },
//   { imgPath: pic2 },
//   { imgPath: pic3 },
//   { imgPath: pic4 },
//   { imgPath: pic5 },
// ];

function Home() {
  const theme = useTheme();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleIndexChange = (index) => {
    setActiveStep(index);
  };

  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;


  return (
    <div className='body'>
        <ElevatorCounter /> {/* Display ElevatorCounter component with customer count */}
      <section className='personalStory'>
        <div className='font-bold_underline'>
          <h1>
            "אני לא מאמינה שאתם צריכים להיות יותר טובים מאחרים,אתם צריכים להיות טובים יותר משחשבתם שאי פעם תוכלו להיות"
          </h1>

          <img src='/src/img/backImg.jpg' alt="תיאור מספק" style={{ maxWidth: '40%', height: '30%', display: 'block', margin: '0 auto' }} />
          <p className="Owner">.Owner, Noya Tzur</p>

          <p className="paragraphText">
            במשך כל חיי נלחמתי עם המשקל והנראות שלי,ניסיתי כל מיני דיאטיות אפשריות אתם יודעים... בלי פחמימות בלי סוכרים וכו עד שיום אחד החלטתי לקחת את עצמי בידיים וליצור לעצמי אורח חיים בריא ולבנות את הגרסה הטובה ביותר שלי
            ומאז אני קמה כל יום בבוקר במטרה לשנות חיים למישהו או מישהי כדי שגם הם יצאו מהלופ ההזוי הזה של כל דיאטות הכאסח המוזרות שלא נותנות כלום
            ויתחילו לדאוג לעצמם ולבריאות שלהם כדי להרגיש הכי טוב שבעולם
            אני מאמינה שעם התוכנית הנכונה כל אחד יוכל להגשים את החלום שלו ואת גוף המטרה שלו ולכן פיתחתי את תוכנית האונליין שלי שמטרתה להגיע אל התוצאות המקסימליות תוך התייחסות אישית לכל סוג מתאמן.
            כיום חברים בתכנית אלפי מתאמנים שכבר עשו את השינוי ויכולים להעיד שהשינוי מתחיל קודם כל בכח הרצון שלכם, ועם ההכוונה הנכונה – השמיים הם הגבול.
          </p>




        </div>
      </section>
      <section>

      <LoginComp></LoginComp>
      <ImageCarousel images={images}/>

        <LoginComp></LoginComp>


      </section>
      {/* <section className='recomendtionCustomers'>

      </section>
      <section className='recomendToRegister'>

      </section> */}

    </div>

  );
}

export default Home;
