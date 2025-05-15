export const aboutStyles = {
  heroSection: {
    backgroundImage: 'url(/images/navBarIm/303.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
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
    }
  },

  heroTitle: {
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },

  containerSpacing: {
    py: 8,
  },

  paperStory: {
    p: 4,
    mb: 8,
  },

  storyTitle: {
    color: '#2e7d32',
    textAlign: 'center',
    mb: 4,
  },

  storyText: {
    fontSize: '1.1rem',
    textAlign: 'center',
  },

  sectionTitle: {
    color: '#2e7d32',
    textAlign: 'center',
    mb: 6,
  },

  featureCard: {
    p: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  featureIcon: {
    color: '#2e7d32',
    mb: 2,
  },

  teamCard: {
    p: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    mb: 2,
  },

  contactCard: {
    p: 4,
  },

  contactItem: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },

  contactIcon: {
    color: '#2e7d32',
    mr: 1,
  },
};