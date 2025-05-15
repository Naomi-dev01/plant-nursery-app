export const otherPagesStyles = {

 contactContainer: {
    py: 8,
  },

  contactInfoPaper: {
    p: 4,
    height: '100%',
    borderRadius: 2,
    bgcolor: 'grey.50',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  contactTitle: {
    variant: 'h4',
    gutterBottom: true,
    color: 'primary',
  },

  contactSubtitle: {
    variant: 'body1',
    color: 'text.secondary',
    paragraph: true,
  },

  contactIconBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },

  contactIconTextTitle: {
    variant: 'subtitle1',
    fontWeight: 'bold',
  },

  contactIconTextSubtitle: {
    variant: 'body2',
    color: 'text.secondary',
  },

  contactFormPaper: {
    p: 4,
    borderRadius: 2,
    bgcolor: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },

  contactFormTitle: {
    variant: 'h5',
    gutterBottom: true,
    color: 'primary',
  },

  contactFormSubtitle: {
    variant: 'body2',
    color: 'text.secondary',
    paragraph: true,
  },

  contactTextField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      '&:hover fieldset': {
        borderColor: 'primary.main',
      },
    },
  },

  contactSubmitButton: {
    borderRadius: 2,
    py: 1.5,
    px: 4,
    textTransform: 'none',
    fontSize: '1.1rem',
    boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(46, 125, 50, 0.3)',
    },
  },

  contactSnackbar: {
    width: '100%',
    borderRadius: 2,
    boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)',
  }
};