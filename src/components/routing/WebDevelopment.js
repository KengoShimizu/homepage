import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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


class WebDevelopment extends Component {
  render() {
  	const { classes } = this.props;

    return (
    	<Container maxWidth="95%">
	    		<Box mb={5} minWidth="90%">
		    		<Box p={2} mb={3}>
		    			<Typography>開発物については<a href="https://github.com/KengoShimizu" className={classes.anchor} target="_blank" rel="noopener noreferrer">Github</a>にてアウトプット</Typography>
		    		</Box>
			    	<Paper style={{backgroundColor: '#f5f5f5'}}>
				    	<Box p={3}>
				    		<Box pb={2}>
								<Typography variant="h4">Web開発について</Typography>
							</Box>
							<Box pl={2} pb={2}>
							<Typography>カナダ留学中に、IT技術が人々の生活を便利・豊かにする点に感動し、Webサービス開発に興味を持ち始める。HTML, CSS, JavaScript, PHP, MySQLを<a href="https://www.codecademy.com/" className={classes.anchor} target="_blank" rel="noopener noreferrer">Codecademy</a>で独学で習得。留学中に個人開発で<a href="https://github.com/KengoShimizu/website" className={classes.anchor} target="_blank" rel="noopener noreferrer">掲示板サービス</a>などを開発し、帰国して間も無く日本気象株式会社で<a href="https://s.n-kishou.co.jp/w/" className={classes.anchor} target="_blank" rel="noopener noreferrer">お天気ナビゲータ</a>の開発を担当。また、2019年12月には<a href="https://www.cyberagent.co.jp/" className={classes.anchor} target="_blank" rel="noopener noreferrer">サイバーエージェント</a>のハッカソン形式のインターンシップで<a href="https://github.com/KengoShimizu/manga" className={classes.anchor} target="_blank" rel="noopener noreferrer">漫画ビューワ</a>を開発。また、現在フレームワークを習得するため、フロントエンドではReactを（本ホームページもReactで開発）、バックエンドではRuby on Railsを勉強中。</Typography>
							</Box>
						</Box>
					</Paper>
				</Box>		
        </Container>
    );
  }
}

export default withStyles(styles)(WebDevelopment);
