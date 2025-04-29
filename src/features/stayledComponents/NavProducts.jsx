import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';


const images = [
  {
    src: "/images/navBarIm/300.jpg",
    title: 'פרחים',
    width: '20%',
    category: 'flowers',//קטגוריה כדי לנווט למוצרים הרצויים.
  },
  {
    src: "/images/navBarIm/303.jpg",
    title: 'עצים',
    width: '20%',
    category: 'trees', 
  },
  {
    src: "/images/navBarIm/1.jpg",
    title: 'תכנון גינות',
    width: '20%',
    category: 'gardenDesign',   
},
  {
    src: "/images/navBarIm/301.jpg",
    title: 'מוצרים נלווים',
    width: '20%',
    category: 'moreStuff', 
  },
{
    src: "/images/navBarIm/10.jpg",
    title: 'זרים ומתנות',
    width: '20%',
    category: 'bouquets',   
},

];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')(({ src }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  }));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
export default function ButtonBaseDemo() {


//משתנה שמחזיק את הניווט בין הקטגוריות השונות
    const navigate = useNavigate();
  
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          onClick={() => navigate(`/products/${image.category}`)}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc src={image.src} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
      
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}