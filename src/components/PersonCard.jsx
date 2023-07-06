import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Manchester from '../images/manchesterLogo.png';
import Flamengo from '../images/flamengoLogo.png';
import Policia from '../images/policiaLogo.png';

const PersonCard = ({ name, description, videoUrl, image }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(!showVideo);
  };

  const getRandomImage = () => {
    const images = [Flamengo, Manchester, Policia];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const rightImage = getRandomImage();

  return (
    <Card
      onClick={handleClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600,
        margin: '16px',
        backgroundColor: '#5F0F40',
        color: 'white',
        '&:hover': {
          backgroundColor: '#7E1765',
        },
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: '20%',
            objectFit: 'cover',
            margin: '16px',
          }}
        />
        <div style={{ flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              {description}
            </Typography>
          </CardContent>
        </div>
        <img
          src={rightImage}
          alt="Right Imagenzinha"
          style={{
            width: '20%',
            objectFit: 'cover',
            margin: '16px',
          }}
        />
      </div>
      {showVideo && (
        <div style={{ margin: '16px' }}>
          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            title="video"
            allowFullScreen
          />
        </div>
      )}
    </Card>
  );
};

export default PersonCard;
