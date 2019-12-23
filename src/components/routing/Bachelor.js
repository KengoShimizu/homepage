import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import basketball from './img/basketball.jpg';
import volleyball from './img/volleyball.jpg';
import ultimate from './img/ultimate.jpg';
import assenble from './img/101-assenble.jpg';
import job from './img/job.jpg';
import Grid from '@material-ui/core/Grid';

const styles = {
  anchor: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffa500',
    fontFamily: 'serif', 
  },
  img: {
  	minWidth: '300px',
    width: '30%',
  },
};

function createData1(title, content) {
  return { title, content };
}
function createData2(img, alt) {
  return { img, alt };
}

const contents = [
  createData1('アルバイト', '大学学部４年間、個別館という個別塾で働く。小学生から高校生までが通うこの塾で主に中学生と高校生の英語、数学及び理科を担当していた。中学3年生、高校3年生の受験学年を担当することが多かったため親御さんとのコンタクトや的確なアドバイスなどでかなりスキルを養うことができた。また、一緒に働く仲間のレベルが高く常に切磋琢磨しスキルアップできる良い環境だった。子供を教える立場であるため、かなりの責任感と時間的マネジメントを養うことができた。特に同期は仲が良く、よく旅行に行ったりととても楽しく仕事ができた。'),
  createData1('サークル活動', 'こちらも同じく大学学部４年間、神戸大学公認サークルである「スポーツサークル 101」に所属。主な活動内容はバスケットボール、バレーボール、アルティメットであり、不定期に他のスポーツもしていた。本サークルは人数が全体で優に100を超えるマンモスサークルであり、運営する学年にあった時、普段の活動からイベントまでかなりの責任感があり大人数でのタスク処理や協調性を学ぶことができた。また、先輩後輩との人間関係の構築など、社会に出てから必要となるスキルが多く得られた。'),
];

const images_j = [
  createData2(job, 'job'),
];

const images_c = [
  createData2(basketball, 'basketball'),
  createData2(volleyball, 'volleyball'),
  createData2(ultimate, 'ultimate'),
  createData2(assenble, 'assenble'),
];

class Bachelor extends Component {
  render() {
  	const { classes } = this.props;

    return (
    	<Container maxWidth="95%">
	    	{contents.map(contents => (
	    		<Box mb={5} minWidth="90%">
			    	<Paper style={{backgroundColor: '#f5f5f5'}}>
				    	<Box p={3}>
				    		<Box pb={2}>
								<Typography variant="h4">{contents.title}</Typography>
							</Box>
							<Box pl={2} pb={2}>
							<Typography>
								{contents.content}
							</Typography>
							</Box>
							<Box pl={2}>
							<Grid container spacing={3}>
							{contents.title === 'アルバイト' ?
								images_j.map(images => (
								<Box pt={2}>
									<img src={images.img} alt={images.alt} className={classes.img}/>
								</Box>
								)) :
								images_c.map(images => (
								
	    							<Grid item xs={12} sm={6} lg={3}>
										<Box pt={2}>
											<img src={images.img} alt={images.alt} className={classes.img}/>
										</Box>
									</Grid>
								))
							}
							</Grid>
							</Box>
						</Box>
					</Paper>
				</Box>
			))}		
        </Container>
    );
  }
}

export default withStyles(styles)(Bachelor);
