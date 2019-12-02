import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import Logo from './logo.jpeg';
import JuteBackground from './jutebackground.jpg'

import GlobalDelivery from './global-delivery.jpg';
import NoMinimum from './no-minimum.jpg';
import QuickQuotes from './quick-quotes.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/payel.ghosh.940">
        Payel Ghosh
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${JuteBackground})`
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: theme.spacing(6),
  },
  logo: {
    width: '48px',
    height: '48px',
    marginRight: theme.spacing(2)
  },
  appBar: {
    backgroundColor: '#fafafa',
    color: '#464745'
  },
  container: {
    backgroundColor: 'red', padding: theme.spacing(2)
  },
  button: {
    padding: theme.spacing(2)
  }
}));

const cards = [
  {
    id: 1,
    title: 'Tiny Minimums. No Maximums',
    description: 'No matter the size of your order, we always provide the best quality jute products',
    image: NoMinimum
  },
  {
    id: 2,
    title: 'Quick Quotes',
    description: 'Upload a photo and submit your requirements to get a quick response',
    image: QuickQuotes
  },
  {
    id: 3,
    title: 'Fast Turnarounds',
    description: 'Orders ship quickly to anywhere in the world',
    image: GlobalDelivery
  }
];

export default function HomePage() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Sumit Your Requirement</p>
      </MenuItem>
      <MenuItem>
        <p>Volume Discounts</p>
      </MenuItem>
      <MenuItem>
        <p>Inspiration Gallery</p>
      </MenuItem>
    </Menu>
  );

  
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="relative" className={classes.appBar}>
          <Toolbar>
            {/*<CameraIcon className={classes.icon} />*/}
            <img src={Logo} alt="Planet Jute Logo" className={classes.logo}></img>
            <Typography variant="h6" color="inherit" noWrap>
              Planet Jute
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.button}>
                <Button variant="outlined">Submit Your Requirement</Button>
              </div>
              <div className={classes.button}>
                <Button variant="outlined">Volume Discounts</Button>
              </div>
              <div className={classes.button}>
                <Button variant="outlined">Inspiration Gallery</Button>
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm" >
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Planet Jute
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Planet Jute is your one stop shop for branding, packaging, and utility needs for your
              business in jute products!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Download Brochure
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Planet Jute
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Contact us at g.payel.p@gmail.com
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
