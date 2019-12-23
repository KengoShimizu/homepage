import React, { Component } from 'react';
import thumbnail from './img/thumbnail.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FaGithub } from "react-icons/fa";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper_head: {
  	paddingTop: '10px',
  	paddingBottom: '10px',
    textAlign: 'center',
  },
  paper_img: {
  	paddingTop: '10px',
  	paddingBottom: '10px',
    textAlign: 'center',
  },
  paper_career: {
  	paddingTop: '10px',
    textAlign: 'left',
  },
  img: {
  	minWidth: '300px',
    width: '30%',
  },
  table: {
    maxWidth: 600,
  },
  anchor: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffa500',
    fontFamily: 'serif', 
  },
});

function createData(year, name, anchor) {
  return { year, name, anchor };
}

const rows = [
  createData('2011.04 - 2014.03', '京都府立桃山高等学校 自然科学科', 'http://www.kyoto-be.ne.jp/momoyama-hs/mt/'),
  createData('2014.04 - 2018.03', '神戸大学 工学部 情報知能工学科', 'http://www.csi.kobe-u.ac.jp/cs/site/'),
  createData('2018.04 - 現在', '神戸大学大学院 システム情報学研究科 情報科学専攻', 'http://www.csi.kobe-u.ac.jp/'),
  createData('2018.09 - 2019.08', 'ブロック大学大学院 コンピュータサイエンス', 'https://brocku.ca/programs/undergraduate/computer-science/'),
];

class Home extends Component {

  	render() {
  		const { classes } = this.props;
    
    	return (
    		<div className={classes.root}>
	    		<Grid container>
	    			<Grid item xs={12}>
	    				<div className={classes.paper_head}>
	          		<Typography variant="h3"> 清水謙吾</Typography>
	          		<TableContainer align="center">
						      <Table className={classes.table} aria-label="simple table">
						        <TableBody>
						            <TableRow>
						              <TableCell align="center">
                            <Typography>連絡先 : <a href="mailto:kengo19.recruit@gmail.com" className={classes.anchor}>kengo19.recruit@gmail.com</a>
                            </Typography>
                          </TableCell>
						              <TableCell align="left">
                            <Typography>Github : <a href="https://github.com/KengoShimizu" target="_blank" rel="noopener noreferrer" className={classes.anchor}><FaGithub /></a>
                            </Typography>
                          </TableCell>
						            </TableRow>
						        </TableBody>
						      </Table>
						    </TableContainer>
	          			</div>
	        		</Grid>
	        		<Grid item xs={12}>
	        			<div className={classes.paper_img}>
	          				<img src={thumbnail} alt='thumbnail' className={classes.img} />
	          			</div>
	        		</Grid>
	        		<Grid item xs={12}>
	        			<div className={classes.paper_career}>
	        				<TableContainer align="center">
						      <Table className={classes.table} aria-label="simple table">
						        <TableBody>
						          {rows.map(row => (
						            <TableRow key={row.name}>
						              <TableCell align="right">
                            <Typography>{row.year}</Typography>
                          </TableCell>
						              <TableCell align="left">
                            <Typography>
                              <a href={row.anchor} target="_blank" rel="noopener noreferrer" className={classes.anchor}>{row.name}</a>
                            </Typography>
                          </TableCell>
						            </TableRow>
						          ))}
						        </TableBody>
						      </Table>
						    </TableContainer>
	          			</div>
	        		</Grid>
        		</Grid>

        	</div>
    	);
  	}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);