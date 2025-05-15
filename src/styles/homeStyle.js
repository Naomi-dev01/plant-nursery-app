
//עיצוב לדף הבית

export const homeStyle = {

heroSectionStyle : {
  backgroundImage: 'url(/images/navBarIm/300.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
},

 paperStyle: {
  p: 4,
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: 2,
},

 heroTitle : { color: '#2e7d32' },
 heroSubtitle : { color: '#1b5e20' },
 heroButton : { mt: 2 },

 sectionTitle : {
  textAlign: 'center',
  mb: 6,
  color: '#2e7d32',
},

 cardStyle : {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },
},

 cardContent : {
  flexGrow: 1,
  textAlign: 'center',
},

 iconStyle : {
  color: '#2e7d32',
  mb: 1,
},

 aboutSection : {
  bgcolor: '#f5f5f5',
  py: 8,
},

 aboutTitle : {
  textAlign: 'center',
  mb: 4,
  color: '#2e7d32',
},

 aboutText :{
  textAlign: 'center',
  fontSize: '1.1rem',
}



};