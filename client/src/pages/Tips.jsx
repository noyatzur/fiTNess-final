import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import '../css/Tips.css';
import waterImg from '../WaterImg/waterImg.jpg';
import waterImg2 from '../WaterImg/waterImg2.jpg';
import gym1 from '../GymImg/gym1.jpg';
import pilates1 from '../GymImg/Pilates1.jpg';
import badImg from '../BadImg/badImg.jpg';
import badImg2 from '../BadImg/badImg2.jpg';
import Measurement_of_circumferences from '../Measurement_of_circumferencesImg/Measurement_of_circumferences.jpg';
import Img2 from '../Measurement_of_circumferencesImg/Img2.jpg';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconEmpty': {
    color: '#fff',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const TipsPage = () => {
  const waterImages = [waterImg, waterImg2]; 
  const gymImages = [gym1, pilates1];
  const badImages = [badImg, badImg2];
  const Measurement_of_circumferencesImages = [Measurement_of_circumferences, Img2];

  const [currentWaterImageIndex, setCurrentWaterImageIndex] = useState(0);
  const [currentGymImageIndex, setCurrentGymImageIndex] = useState(0);
  const [currentBadImageIndex, setCurrentBadImageIndex] = useState(0);
  const [currentMeasurementIndex, setCurrentMeasurementIndex] = useState(0); 

  useEffect(() => {
    const waterIntervalId = setInterval(() => {
      setCurrentWaterImageIndex((prevIndex) => (prevIndex + 1) % waterImages.length);
    }, 2000);

    const gymIntervalId = setInterval(() => {
      setCurrentGymImageIndex((prevIndex) => (prevIndex + 1) % gymImages.length);
    }, 2000);

    const badIntervalId = setInterval(() => {
      setCurrentBadImageIndex((prevIndex) => (prevIndex + 1) % badImages.length);
    }, 2000);

    const measurementIntervalId = setInterval(() => {
      setCurrentMeasurementIndex((prevIndex) => (prevIndex + 1) % Measurement_of_circumferencesImages.length);
    }, 2000);

    return () => {
      clearInterval(waterIntervalId);
      clearInterval(gymIntervalId);
      clearInterval(badIntervalId);
      clearInterval(measurementIntervalId); 
    };
  }, [waterImages.length, gymImages.length, badImages.length, Measurement_of_circumferencesImages.length]);

  return (
    <div className="tips-page">
      <Typography variant="h4">טיפים</Typography>
      <div className="tips-container">
        <div className="tip spiral-background">
          <img src={waterImages[currentWaterImageIndex]} alt="בקבוקי מים" />
          <p>!הקפידו לשתות לפחות 3 ליטר מים ביום </p>
        </div>
      </div>
      <div className="tips-container">
        <div className="tip spiral-background">
          <img src={gymImages[currentGymImageIndex]} alt="אימונים " />
          <p>הקפידו ל 3 אימונים בשבוע לפחות  </p>
        </div>
      </div>
      <div className="tips-container">
        <div className="tip spiral-background">
          <img src={badImages[currentBadImageIndex]} alt="שעות שינה " />
          <p>  הקפידו לשינה טובה ואיכותית - לפחות 7-8 שעות איכותיות בלילה  </p>
        </div>
      </div>
      <div className="tips-container">
        <div className="tip spiral-background">
          <img src={Measurement_of_circumferencesImages[currentMeasurementIndex]} alt="מדידת היקפים " />
          <p> הקפידו לבדוק את המשקל וההיקפים שלכם בכל שבוע בכדי לעקוב אחר התהליך שלכם  </p>
        </div>
      </div>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend" variant="h5">?האם המידע הועיל    </Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} לב${value !== 1 ? 'ים' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
};

export default TipsPage;












{/* // import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import gym1 from '../img/gym1.jpg';
// import pilates1 from '../img/pilates1.jpg';

// const itemData = [ */}
//   {
//     img: gym1,
//     title: 'GYM',
//     author: 'NOYA TZUR',
//   },
//   {
//     img: pilates1,
//     title: 'pilates',
//     author: 'NOYA TZUR',
//   }
// ];

// export default function TitlebarBelowImageList() {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }} cols={3}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={item.img} // Use item.img directly as src
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={<span>by: {item.author}</span>}
//             position="below"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

