import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PersonCard = ({ name, description, videoUrl, image }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        display: 'flex',
        flexDirection: 'column', // Alterado para coluna
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
            <Typography sx={{ fontFamily: 'Lobster, cursive' }} variant="h6" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Lobster, cursive' }}
            >
              {description}
            </Typography>
          </CardContent>
        </div>
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
