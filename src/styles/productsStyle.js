export const productsStyles = {
  mainBox: {
    mt: 8
  },
  heroBox: {
    backgroundImage: 'url(/images/navBarIm/300.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '30vh',
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
  paper: {
    p: 4,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 2
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 2
  },
  icon: {
    fontSize: 40,
    color: '#2e7d32',
    mr: 1
  },
  title: {
    color: '#2e7d32'
  },
  subtitle: {
    color: '#1b5e20'
  },
  navBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
    flexWrap: 'wrap',
    mt: 4,
    mb: 6,
  },
  activeCategoryButton: {
    backgroundColor: 'rgba(25, 118, 210, 0.12)',
    boxShadow: '0 0 15px rgba(25, 118, 210, 0.5)',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(25, 118, 210, 0.2)',
      boxShadow: '0 0 20px rgba(25, 118, 210, 0.7)',
    }
  },
  productCardContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    py: 6,
    px: 2,
    bgcolor: 'grey.50'
  },
  productCardPaper: {
    p: { xs: 3, md: 6 },
    borderRadius: 4,
    width: '100%',
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    bgcolor: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    '@media (max-width: 900px)': {
      width: '95%'
    }
  },
  productImageBox: {
    width: '100%',
    height: { xs: '350px', md: '500px' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    overflow: 'hidden',
    bgcolor: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 3,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
    }
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    p: 2
  },
  productDetailsBox: {
    height: '100%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  quantityControlBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 2,
    py: 2
  },
  quantityButton: {
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
    width: 48,
    height: 48,
    '&:hover': {
      backgroundColor: 'rgba(46, 125, 50, 0.2)'
    }
  },
  quantityText: {
    minWidth: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'primary.main'
  },
  addToCartButton: {
    py: 2,
    px: 6,
    borderRadius: 3,
    textTransform: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)',
    alignSelf: 'flex-start',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(46, 125, 50, 0.3)'
    }
  },
  backButton: {
    mt: 4,
    mb: 8,
    py: 1.5,
    px: 4,
    borderRadius: 3,
    textTransform: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderWidth: 2,
    '&:hover': {
      borderWidth: 2,
      backgroundColor: 'rgba(46, 125, 50, 0.04)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(46, 125, 50, 0.1)'
    }
  },
  successAlert: {
    width: '100%',
    borderRadius: 2,
    boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)'
  },
  productTitle: {
    fontWeight: 'bold',
    textAlign: 'right'
  },
  productPrice: {
    fontWeight: 'bold',
    textAlign: 'right',
    mb: 3
  },
  productLabel: {
    fontWeight: 'bold'
  }
};
