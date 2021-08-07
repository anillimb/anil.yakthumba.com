import styles from './Footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



const Footer = () => {
	return(
		<div className={styles.footerSection}>
			<Divider />
				<div className={styles.footerIcons}>
					<FacebookIcon 
						style={{fontSize: '40px', color: '#4267B2', cursor: 'pointer'}}
					/>
					<InstagramIcon 
						style={{fontSize: '40px', color: '#833ab4', cursor: 'pointer'}}
					/>
					<TwitterIcon 
						style={{fontSize: '40px', color: '#1DA1F2', cursor: 'pointer'}}
					/>
					<br />
				</div>
				<Typography variant="body2" className={styles.footerIconText}>
					All &copy; Received in 2021.
				</Typography>
		</div>
	);
}

export default Footer;

