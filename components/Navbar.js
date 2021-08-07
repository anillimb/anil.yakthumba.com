import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
		flexGrow: 1,
		fontFamily: 'Roboto',
  },
	appBar: {
		backgroundColor: '#2a3134',
		color: '#fff',
	},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
		
  },
	navToolBarL: {
		justifyContent: 'space-between',
	},
	unorderListItem: {
		flexGrow: 1,
		[theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
		'& ul': {
			listStyle: 'none',
			marginLeft: '-141px',
			display: 'flex',
			justifyContent: 'center',
		},
		'& li': {
			paddingLeft: '25px',
		},
		'& a': {
			textDecoration: 'none',
			color: '#fff',
		}
	},
	navCircleIcon: {
		
	},
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.navToolBar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Anil
          </Typography>
					<div  className={classes.unorderListItem}>
						<ul>
							<li><Link href="/"><a>Home</a></Link></li>
							<li><Link href="/about"><a>About</a></Link></li>
						</ul>
					</div>
					<div className={classes.navCircleIcon}> 
					<IconButton 
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
						>
						<AccountCircle />
					</IconButton>
					</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}