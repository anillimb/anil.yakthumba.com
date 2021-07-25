import Navbar from '../components/Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	aboutContent: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '40px',
	},
	aboutTitle: {

	},
	skillsContent: {
		padding: '50px 30px 0px 30px',
	},
	boardDirectorListDivider: {
		paddingTop: '30px',
	},
}));

const skills = [
	{ id: 1, title: 'HTML', content: 'I have five years experience in HTML.' },
	{ id: 2, title: 'CSS', content: 'I have five years experience in CSS.' },
	{ id: 3, title: 'Java Script', content: 'I have five years experience in Java Script.' },
	{ id: 4, title: 'React Js', content: 'I have five years experience in React Js' },
]

function About() {

	const classes = useStyles();

  return(
		<div>
			<Navbar />
			<section>
				<div  className={classes.aboutContent}>
					<Typography variant="h2" component="h2" className={classes.aboutTitle}>
						My skill's
					</Typography>
				</div>
				<div>
					<Grid  container spacing={3} className={classes.skillsContent}>
						{skills.map((item, index) => {
								return(
									<Grid key={`bod-${index}`} item xs={6} md={3}>
										<Divider />
											<div className={classes.boardDirectorListDivider} >
												<Typography variant="h5" component="h5" >
													{item.title}
												</Typography>
												<Typography variant="subtitle2" component="p">
													{item.content}
												</Typography>
											</div>
									</Grid>
								);
							})}
					</Grid>
				</div>
			</section>
		</div>
	);
}

export default About;