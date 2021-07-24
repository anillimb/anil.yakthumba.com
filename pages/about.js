import Navbar from '../components/Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	aboutContent: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '15px',
	},
	aboutTitle: {

	},
}));

function About() {

	const classes = useStyles();

  return(
		<div>
			<Navbar />
			<section className={classes.aboutContent}>
				<Typography variant="h2" component="h2" className={classes.aboutTitle}>
					My skill's
				</Typography>
				<div>
					<Grid container spacing={3}>
						<Grid item xs={3}>
							GRID
						</Grid>
						<Grid item xs={3}>
						GRID
						</Grid>
						<Grid item xs={3}>
						GRID
						</Grid>
						<Grid item xs={3}>
						GRID
						</Grid>
					</Grid>
				</div>
			</section>
		</div>
	);
}

export default About;